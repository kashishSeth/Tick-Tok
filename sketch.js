var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);

  var hr = hour();
  var min = minute();
  var sec = second();

  fill("Black")
  text(hr + ":" + min + ":" + sec , 50,50)

  translate(200,200);
  rotate(-90);
  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  //drawing the second hand
  push();
  rotate(secAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(minAngle); 
  stroke("Blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle); 
  stroke("Green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //console.log(hr);
  //console.log(min);
  //console.log(sec);
  //console.log(hrAngle);
  //console.log(secAngle);

  fill("Black");
  text(mouseX + ", " + mouseY, mouseX,mouseY);
}
