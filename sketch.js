
var r,g,b,ellipse;

function setup(){
  background(rgb(0,0,0));
  createCanvas(255,200);
  r = 0;
  g = 50;
  b = 255;
  ellipse = createSprite(mouseX,mouseY,10,10)
  ellipse.shapeColor = "white";
}


function draw(){
r = mouseX;
g = mouseX;
b = mouseX;
background(rgb(mouseX,mouseX,mouseX))

drawSprites();
}