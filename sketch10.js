let instanceShader;
let instanceStrokeShader;
let particleModel;

function instanceShaderCallback() {
  //   getWorldInputs((iG
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  instanceShader = baseColorShader().modify(instanceShaderCallback);
  particleModel = buildGeometry(() => sphere(10, 8, 20));
}

function draw() {
  background(0);
  orbitControl();
  model(particleModel);
  shader(instanceShader);
  strokeShader(instanceStrokeShader);
}
