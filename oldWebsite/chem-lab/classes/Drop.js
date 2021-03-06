/*
	Drop: the smallest unit of liquid


  Behavior: falls until it reaches the bottom of a tank. At that point,
	it enters the tank.
*/
 var lastId = 0;

function Drop(position, size, liquid)
{
	this.position = position;
	this.size = size;
  this.liquid = liquid;
	this.id = lastId;
	this.svg = document.createElementNS("http://www.w3.org/2000/svg", "rect");



	lastId += 1;
}
/*
	Creates and adds the svg to the main svg object.
*/
Drop.prototype.createSVG = function() {
	var svg = document.querySelector("svg");

	this.updateSVG();

	svg.appendChild(this.svg);
};

/*
	Updates the svg after its already been added to the main svg object.
*/
Drop.prototype.updateSVG = function() {
	this.svg.setAttribute("width", this.size);
	this.svg.setAttribute("height", this.size);
	this.svg.setAttribute("x", this.position.x);
	this.svg.setAttribute("y", this.position.y);
	this.svg.setAttribute("fill", this.liquid.fill());
};

Drop.prototype.getVolume = function () {
  return this.size * this.size;
};


/*
  Removes the svg
*/
Drop.prototype.destroySVG = function() {
	this.svg.remove();
}


/*
  Causes a drop to fall until it enters a tank, or exits the world
*/
Drop.prototype.fall = function(world) {
	var self = this;

	var svg = document.querySelector("svg");

	this.position.y += 1;
	this.updateSVG();

  // drop is outside the world
	if(!world.within({position: this.position, width: this.size, height: this.size}))
	{
		world.removeDrop(this);
		this.destroySVG();
	}
	else // drop is inside the world
	{
		// if in tank, remove drop and fill tank with size of drop
		world.objs.forEach(function(obj) {

			if(obj instanceof Tank && obj.containsDrop(self))
			{
        // add respective amount of fluid to the tank
				obj.addDrop(self);
				obj.updateLiquidSVG();

				// remove drop from world
				world.removeDrop(self);
				self.destroySVG();

				return;
			}
		})
	}
};



/*
  Causes the drop to flow through a pipe.
  This function is called every update.
  directions: up, down, left, right
*/
Drop.prototype.flow = function (pipe, direction) {
  /*if(direction === "up") {
    this.position.y -= 1
  } */
  if(direction === "down") {
    this.position.y += 1
  }
  /*
  else if(direction === "left") {
    this.position.x -= 1
  } */
  else if(direction === "right") {
    this.position.x += 1
  }
  this.updateSVG();
};


/*
  Checks to see if the drops can flow.

  Behavior: drops flow down and to the right.
*/
Drop.prototype.canFlow = function (pipe, direction) {
  /*
  if(direction === "up") {
    // make sure the drop is below the pipes upper edge
    if(this.position.y - 1 < pipe.center.y - pipe.getHeight()/2 - this.size) {
      return false;
    }
  }
  */
  if(direction === "down") {
    // make sure the drop is below the pipes lower edge
    if(this.position.y + 1 > pipe.center.y + pipe.getHeight()/2 - this.size) {
      return false;
    }
  } /*else if(direction === "left") {
    // make sure the drop is below the pipes left edge
    if(this.position.x - 1 < pipe.center.x - pipe.getWidth()/2) {
      return false;
    }
  }*/
  else if(direction === "right") {
    // make sure the drop is below the pipes right edge
    if(this.position.x + 1 > pipe.center.x + pipe.getWidth()/2 - this.size) {
      return false;
    }
  }
  return true;
};
