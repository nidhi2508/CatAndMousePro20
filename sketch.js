//creating variables for background, cat and mouse 
var bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
  //loading the images of the background, cat and mouse 
  bgImg = loadImage("images/garden.png");
  catImg1 = loadAnimation("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
  catImg3 = loadAnimation("images/cat4.png");
  mouseImg1 = loadAnimation("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse3.png");
  mouseImg3 = loadAnimation("images/mouse2.png");
}

function setup(){
  //creating a canvas 
  createCanvas(1000, 800);

  //creating the sprites
 // bgImg = createSprite(200, 490, 1000, 800);
 // bgImg.addImage()
  cat = createSprite(800, 680);
  cat.addAnimation("cat1",catImg1);
  cat.scale = 0.2;
  
  mouse = createSprite(120, 680);
  mouse.addAnimation("mouse3",mouseImg3);
  mouse.scale = 0.1;
}

function draw() {
  //giving the background 
  background(bgImg);
  
  //code when the cat and mouse have collided
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX = 0;
     cat.addAnimation("cat3", catImg3);
     cat.changeAnimation("cat3");

     mouse.addAnimation("mouse1", mouseImg1);
     mouse.changeAnimation("mouse1");
    }

  drawSprites();
}


function keyPressed(){
  //code when the left arrow is pressed 
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -2;
      cat.addAnimation("cat2", catImg2);
      cat.changeAnimation("cat2"); 
      cat.frameDelay = 25;     
  }

  //code when the right arrow is pressed 
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouse2", mouseImg2);
      mouse.changeAnimation("mouse2");
      mouse.frameDelay = 25;
  }
}
