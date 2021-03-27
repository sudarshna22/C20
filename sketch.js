var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200, 200, 50, 80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  drawSprites();
}