function lightningSetup() {
  ambientLight(80, 80, 140);
  const pointX = cos(millis() / 750) * 100;
  const pointZ = sin(millis() / 750) * 100;
  pointLight(80, 80, 255, pointX, -60, pointZ);
}

function setup() {
  createCanvas(200, 200, WEBGL);
  pixelDensity(1);
}

function draw() {
  background(100);
  lightningSetup();
  sphere(80);
}
