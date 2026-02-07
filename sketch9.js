let firstShader;

function firstShaderCallback() {
  getFinalColor((color) => {
    color = [1, 0, 0, 1];
    return color;
  });
}

function setup() {
  createCanvas(200, 200, WEBGL);
  firstShader = baseColorShader().modify(firstShaderCallback);
}

function draw() {
  background(0);
  shader(firstShader);
  sphere(80);
}
