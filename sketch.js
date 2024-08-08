let xPos;
let yPos;

function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}

xPos = 250;
yPos = 250;

function draw() {
  background(0);

  fill(255, 137, 105)
  rect(xPos, yPos, 50, 50)

  if (keyIsDown(LEFT_ARROW)) {
    xPos -= 3
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    xPos += 3
  } 
  if (keyIsDown(UP_ARROW)) {
    yPos -= 3
  } 
  if (keyIsDown(DOWN_ARROW)) {
    yPos += 3
  }
}
