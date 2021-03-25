/**
  Plot - a plot of land that can be farmed on
*/
define(
  [
    "items/GrassSeedItem",
    "items/GrassBladeItem",
    "items/HoeItem",
    "items/SeedItem",
    "items/Item",
    "d3"],
  function(GrassSeedItem, GrassBladeItem, HoeItem, SeedItem, Item, d3) {
    return class Slot {
      static size = 50;

      /**
        constructor()
        @description constructs the slot
      */
      constructor(inventoryManager, inventory, position) {
        this._position = position;
        this._inventoryManager = inventoryManager;
        this._inventory = inventory;
        this._item = null;

        this._svg = {}
        this._svg.group = d3.create("svg:g")
        this._svg.background = this._svg.group.append("rect")
        this._svg.itemGroup = this._svg.group.append("g")
        this._svg.clickArea = this._svg.group.append("rect")
      }

      /********************************************************
                        JSON Function
      *********************************************************/

      /**
        toJSON()
        @description converts this slot to its json representation
      */
      toJSON() {
        if(this._item !== null)
          return {
            item: this._item.toJSON()
          }
        else
          return {
            item: null
          }
      }




      /********************************************************
                        Graphics Methods
      *********************************************************/

      /**
        initSVG()
        @description initialize the values for the _svg
      */
      initSVG() {
        var self = this;

        this._svg.group.attr("class", "slot")

        // render the background
        this._svg.background
          .attr("x", this._position.x)
          .attr("y", this._position.y)
          .attr("width", Slot.size)
          .attr("height", Slot.size)
          .style("fill", "grey")
          .style("stroke", "black")
          .style("stroke-width", 3)

        this._svg.clickArea
          .attr("x", this._position.x)
          .attr("y", this._position.y)
          .attr("width", Slot.size)
          .attr("height", Slot.size)
          .style("fill-opacity", 0)
          .on("click", function() {self.onClick()})
          .on("mouseover", function() {self.onMouseEnter()})
          .on("mouseout", function() {self.onMouseLeave()})
          .on("mousedown", function() {self.onMouseDown()})
      }

      /**
        addGraphicsTo()
        @description add this slot to parent graphics
        @param parent the svg element to add this slot to
      */
      addGraphicsTo(parent) {
        parent.append(() => this._svg.group.node())
      }


      /********************************************************
                        Getters and Setters
      *********************************************************/

      /**
        set position
        @description sets the _position of this slot
        @param _position the new _position of this slot
      */
      set position(position) {
        if(this._item !== null) {
          this._item.position = {
            x: position.x + 5,
            y: position.y + 5
          }
        }
        this._position = position

        this._svg.clickArea
          .attr("x", this._position.x)
          .attr("y", this._position.y)

        this._svg.background
          .attr("x", this._position.x)
          .attr("y", this._position.y)
      }

      /**
        get position
        @description gets the _position of the slot
      */
      get position() {
        return this._position
      }

      /**
       * getGraphics()
       * @description gets the graphics for the slot
       */
      get graphics() {
        return this._svg.group;
      }

      /**
       * get item
       * @description gets the item of the slot
       */
      get item() {
        return this._item;
      }


      /**
        addUnit()
        @description adds a unit for this slot
        @param item item to put in this slot
        @param layer the graphics layer to add the unit to
      */
      addItem(item, layer) {
        if(this._item === null) {

          // update the item
          this._item = item;
          this._item.position = {
            x: this._position.x + 5,
            y: this._position.y + 5
          }

          // initialize the unit and add it to the svg layer
          this._item.initSVG()
          this._item.addGraphicsTo(layer)

          // setup the drag handler that allows you to drag
          // the unit around
          var self = this
          var dragHandler = d3.drag()
            .on("start", function(event) {
              self.onDrag(event)
            })
            .on("drag", function(event) {
              self.onDrag(event)
            })
            .on("end", function(event) {
              self.onDragEnd(event)
            })

          dragHandler(this._item.svg.clickArea)

          this._item.svg.clickArea.on("click", function() {
            self.onClick()
          })
        } else {
          this._item.quantity += item.quantity;
        }
      }

      /**
        removeItem()
        @description removes the item from this slot
      */
      removeItem() {
        if(this._item !== null) {
          //this._item.svg.group.selectAll("*").remove()
          this._item = null;
        }
      }

      /**
        destroyItem()
        @description removes the item and its graphic from the slot
      */
      destroyItem() {
        if(this._item !== null) {
          this._item.svg.group.selectAll("*").remove()
          this._item = null;
        }
      }


      /**
        distanceTo()
        @description returns the distance between the center of this
          slot and the center of a item
        @param item the item to find the distance to
      */
      distanceTo(item) {
        return Math.sqrt(
          Math.pow(item.position.x - this._position.x, 2) +
          Math.pow(item.position.y - this._position.y, 2)
        )
      }

      /**
        useSlot()
        @description use the item in this slot
      */
      useSlot() {
        if(this._item.quantity - 1 > 0) {
          this._item.quantity -= 1;
        } else {
          this.destroyItem()
        }
      }

      /**
        isEmpty()
        @description returns whether this slot is empty or not
      */
      isEmpty() {
        return this._item === null;
      }



      /**
        select()
        @description selects this slot of the inventory
      */
      select() {
        this._svg.background.style("stroke", "green")
      }

      /**
        deselect()
        @description deselects this slot of the inventory
      */
      deselect() {
        this._svg.background.style("stroke", "black")
      }

      /********************************************************
                       Mouse Interactions
      *********************************************************/

      /**
        onDragEnd()
        @description the function that is called when you end dragging a
          unit
      */
      onDragEnd(event) {
        if(this._inventory.itemsMovable) {
          console.log("Drag");
          this._inventoryManager.snapToClosestSlot(this._item)
          this.removeItem()
        }
      }

      /**
        onDrag()
        @description the function that is called when you are dragging a
          unit
      */
      onDrag(event) {
        if(this._item !== null && this._inventory.itemsMovable) {
          this._item.position = {
            x: event.x - Slot.size/2,
            y: event.y - Slot.size/2
          }
        }
      }

      /**
        onClick()
        @description the function called when this block is clicked
      */
      onClick() {
        this._inventory.deselectAll()
        this._inventory.select(this)
        this.select()
      }

      /**
        onMouseDown()
        @description the function called when the mouse is pressed down on the slot
      */
      onMouseDown() {
      }

      /**
        onMouseEnter()
        @description the function called when the mouse enters the button area
      */
      onMouseEnter() {
        this._svg.background.style("fill-opacity", 0.5)
      }

      /**
        onMouseLeave()
        @description the function called when the mouse enters the button area
      */
      onMouseLeave() {
        this._svg.background.style("fill-opacity", 1)
      }




    }
  })
