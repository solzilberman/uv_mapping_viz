let angle = 0;
let theta;
let RADIUS = 75;
function setup() {
  createCanvas(400, 400);
  a = createVector(200, 100);
  b = createVector(275, 100);
  theta = PI/2;
  frameRate(30);
  angleMode(RADIANS);
}

function draw() {
  angle = (angle + 0.01) % 360;
  background(220);

  // draw base circle and sphere
  noFill();
  ellipse(200,100,150,150)
  rect(150, 250, 100, 100);
  fill("red");
  ellipse(200,100,10,10);

  // draw and rotate vector circle center to edge
  fill(255, 0, 100);
  b.rotate(theta);
  line(a.x, a.y,  a.x+cos(theta)*RADIUS, a.y+sin(theta)*RADIUS);
  theta += radians(1);

  // apply uv map to above vector endpoint and map to square
  tex = createVector(a.x+cos(theta)*RADIUS, a.y+sin(theta)*RADIUS).sub(a);
  tex.normalize();
  u = .5 + (atan(tex.x))/TWO_PI;
  v = .5 - (asin(tex.y))/(PI);
  u *= 100;
  v *= 100;
  fill(0, 255, 0);
  ellipse(150+u, 250+v, 5, 5);

  fill(0);
  textAlign(CENTER);
  text("Unit Vector (original)", 200, 200);
  text("UV Coords (calculated)", 200, 380);

}
