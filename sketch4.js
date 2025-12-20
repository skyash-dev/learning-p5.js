// custom variables for y-coordinate of sun and horizon.
let sunHeight;
let horizon = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // sun follows y-coordinates of mouse
  sunHeight = mouseY;

  if (sunHeight < horizon) {
    background("lightblue");
  }

  // sun
  fill("yellow");
  circle(200, sunHeight, 160);

  // draw line for horizon
  stroke("green");
  line(0, horizon, 400, horizon);

  // grass
  if (sunHeight < horizon) {
    fill("lightgreen");
  } else {
    fill("green");
  }
  rect(0, horizon, 400, 200);
}
