var bg, bgImage;
var frogPlayer, frogImage, frogHop;
var invisGround;

var fly, flyImage;
function preload(){
  bgImage = loadImage("bg2.JPG");
  frogImage = loadAnimation("frog/frog1.png");
  frogHop = loadAnimation("frog/hop1.png","frog/hop2.png","frog/hop3.png","frog/hop4.png","frog/hop5.png");

  flyImage = loadAnimation("bugs/fly1.png","bugs/fly2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(bgImage);
  bg.scale = 1;

  frogPlayer = createSprite(250,600);
  //frogPlayer.addAnimation("standing",frogImage);
  frogPlayer.addAnimation("hopping",frogHop);
  frogPlayer.scale = 6;

  invisGround = createSprite(displayWidth/2,displayHeight - 200,displayWidth,20);
  invisGround.visible = false;
}

function draw() {
  background(255,255,255);

  if(keyDown("space")){
  frogPlayer.velocityY = -7;
  }

  frogPlayer.velocityY = frogPlayer.velocityY + 0.7;
  frogPlayer.collide(invisGround);

  fly1();
  //bee();
  drawSprites();
}

  function fly1(){
    if(frameCount % 80 ===0){
      fly = createSprite(Math.round(random(0,displayWidth - 70)),400);
      fly.addAnimation("flying",flyImage);
      fly.scale = 0.2
      fly.setVelocity(5,7);

    }
  }
