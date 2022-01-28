var ship,sea;
var ship,seaImg;



function preload(){

seaImg= loadImage("sea.png");
shipimg1 = loadAnimation("ship-1.png","ship-2.png");
}


function setup(){
  createCanvas(400,400);
  background(0);
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.2;
  sea.velocityX=-6;
  ship=createsprite(130,200,40,40);
  ship.addanimation("movingShip",shipImg1);
  ship.cale=0.25;
}




function draw() {
  background(0);
 sea.velocityX=-4;
 drawsprites();
}