function setup() {
  // creates a canvas 600px wide and 400px high.
  createCanvas(600, 400);
}

function draw() {
  // sky blue bg.
  background(135, 206, 235);

  // sun at top-right corner.
  fill("yellow"); // yellow sun
  stroke("orange"); // orange outline
  strokeWeight(20); // 20px outline
  circle(550, 50, 100);

  // grass at the bottom.
  stroke(0); // black
  strokeWeight(1); // 1px outline
  fill("green"); // green grass
  rect(0, 300, 600, 100); // rectangle

  strokeWeight(0);
  fill("white");
  textSize(20);
  text("flower", 100, 250);
  text("ladybug", pmouseX, pmouseY);
}
