//Mouse Over Challenge

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 200;
let rectY = 150;
let rectSize = 80;
let arcX = 100;
let arcY = 150;
let arcSize = 20;
let mouseX, mouseY;

let animate = false;
let onmouseHover = false;
requestAnimationFrame(loop);
function loop() {
  //Draw a Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a blue and a green square
  ctx.fillStyle = "grey";
  ctx.fillRect(rectX, rectY, rectSize, rectSize);

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(400, 300, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
  ctx.fill();

  //Update Variables

  if (
    mouseX < rectX + rectSize &&
    mouseX > rectX &&
    mouseY > rectY &&
    mouseY < rectY + rectSize
  ) {
    console.log(mouseX);
  }

  requestAnimationFrame(loop);
}
