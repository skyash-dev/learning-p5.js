// initial sun position
let sunHeight = 600;
let redVal = 0;
let greenVal = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  sky();
  sun();
  mountains();
  animate();
  // draw two trees
  tree(150, 320, 10);
  tree(210, 320, 10);
}

function sky() {
  background(redVal, greenVal, 0);
}
function sun() {
  // sun
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}
function mountains() {
  //mountains
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
}
function animate() {
  if (sunHeight > 130) {
    sunHeight -= 2;
  }
  if (sunHeight < 480) {
    redVal += 4;
    greenVal += 1;
  }
}

//A function to draw trees with different x and y and size
function tree(x, y, size) {
  // Draw a tree.
  fill(80, 30, 20);
  rect(x - size, y, size * 2, size * 6);
  fill(20, 130, 5);
  triangle(x - size * 3, y, x, y - size * 8, x + size * 3, y);
}
function keyPressed() {
  redVal = 0;
  greenVal = 0;
  sunHeight = 600;
}
