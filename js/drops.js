let snap = Snap("#example1")

var drops = []
var colors = [
  "blue",
  "green",
  "orange",
  "teal"
]
var xMax = 650

// create random drops
for (var i = 0; i < 10; i++) {
  let x = Math.floor(Math.random()*xMax);
  var newDrop = snap.rect(x, 0, 15, 15)
  newDrop.attr({
    fill: colors[Math.floor(Math.random() * colors.length)]
  })
  drops.push({
    rect: newDrop,
    x: x
  })
}

function genFunc(drop, duration) {
  return () => {
    drop.rect.animate({y: 180}, duration, function() {
      drop.rect.animate({y: 185, width: 30, height: 1}, duration)
    })
  }
}



var playBtn = document.querySelector("#play")
playBtn.addEventListener("click", function() {
  let duration = 1000
  for (var drop of drops) {
    let delay = Math.floor(Math.random() * 1000) + 100
    drop.rect.attr({
      x: drop.x,
      y: 0,
      width: 15,
      height: 15
    })
    setTimeout(
      genFunc(drop, duration),
      delay
    )

  }
})
