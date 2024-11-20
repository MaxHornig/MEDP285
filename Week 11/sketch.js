//specify state at which rotation is 0
let YinYangAngle = 0;

let Yang = "white";
let Yin = "black";
let bgcolor = 255;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function YinYangDraw(x, y) {
  translate(x, y);
  // main arc for yang
  fill(Yang);
  arc(0, 0, width, height, 0, PI);

  // main arc for yin
  fill(Yin);
  arc(0, 0, width, height, PI, TWO_PI);

  // end of yang arc using an ellipse, no other simple way to do this. also completes yin tail
  fill(Yang);
  ellipse(width / 4, 0, width / 2, height / 2);

  // end of yin arc using an ellipse
  fill(Yin);
  ellipse(-width / 4, 0, width / 2, height / 2);

  //tiny yang dot
  fill(Yang);
  ellipse(-width / 4, 0, width / 6, height / 6);

  // tiny yin dot
  fill(Yin);
  ellipse(width / 4, 0, width / 6, height / 6);
}

function bgdecay(decay) {
  // background will slowly darken over time at DECAY rate until it becomes 0
  if (frameCount % 60 == 0 && bgcolor >= -1) {
    bgcolor -= decay;
  }
}

function draw() {
  // put our ideograph in the center of the canvas by translating it, so we can rotate it
  // using scale to make this ideograph smaller without having squirrelly math
  translate(width / 2, height / 2);
  scale(0.8);
  rotate(YinYangAngle);

  background(bgcolor);
  push();
  YinYangDraw(0, 0);
  pop();
  //specify rate at which all of this rotates, found out that -= is REALLY useful for indicating persistent change without looking too repetitive
  YinYangAngle -= 0.02;

  bgdecay(1);
}
//when clicked, returns the background to 255
function mousePressed() {
  bgcolor = 255;
}
