function setup() {
  // creates a canvas 400px wide and 400px high.
  createCanvas(400, 400);
}

let cloudOneX = 50;
let speed = 1;
//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function draw() {
  frameRate(15);
  background(0, 0, 255);
  //displays the x and y position of the mouse on the canvas
  fill(255); //white text
  text(`${mouseX}, ${mouseY}, ${cloudOneX}`, 20, 20);

  stroke(0);
  strokeWeight(1);
  fill("gray");
  triangle(-40, 300, 75, 100, 200, 300);
  triangle(100, 300, 300, 100, 500, 300);

  fill("green");
  rect(0, 300, 400, 100);

  strokeWeight(0);
  fill("white");
  circle(350, 50, 100);
  strokeWeight(0);
  fill("blue");
  circle(320, 50, 100);

  if (cloudOneX > 320) {
    speed = -1;
  } else if (cloudOneX == 50) {
    speed = 1;
  }
  cloudOneX += speed;
  //cloud
  fill(255);
  ellipse(cloudOneX, 40, 80, 40);
  ellipse(cloudOneX + 60, 80, 80, 40);

  //set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height / 2);

  strokeWeight(1);
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
}
