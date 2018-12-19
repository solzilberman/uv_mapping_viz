function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  ellipse((frameCount * 2) % width, height / 2, 40, 40);
}
