
var carrot,carrotImg,snakes,snakesImg,bunny,bunnyImg,bgImg;
var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9;
function preload() {
  bgImg = loadImage("images/bg.png");
  carrotImg = loadImage("images/carrot.png");
  snakesImg = loadImage("images/snake.png");
  bunnyImg = loadImage("images/bunny.png")
  
}

function setup() {

  createCanvas(600,600);
  bg = createSprite(300,300,600,600);
  bg.addImage(bgImg);
  bg.scale = 5;

  bunny = createSprite(300,550,100,200);
  bunny.shapeColor="white";
  bunny.addImage(bunnyImg)
  bunny.scale = 0.30 ;
  bunny.debug=true;
  bunny.setCollider("rectangle", 0, 0, 100, 200);

  carrot = createSprite(550,50,50,50);
  carrot.addImage(carrotImg);
  brick = createSprite(50,250,100,35);
  brick1 = createSprite(200,250,100,35);
  brick2 = createSprite(350,250,100,35);
  brick3 = createSprite(500,250,100,35);
  brick4 = createSprite(640,250,100,35);
  brick5 = createSprite(-25,375,100,35);
  brick6 = createSprite(125,375,100,35);
  brick7 = createSprite(275,375,100,35);
  brick8 = createSprite(425,375,100,35);
  brick9 = createSprite(575,375,100,35);


  
  snakesGroup = new Group();
}

function draw() {
  background("lime");  

  
  brick.shapeColor="#8f4f4f";
  brick1.shapeColor="#8f4f4f";
  brick2.shapeColor="#8f4f4f";
  brick3.shapeColor="#8f4f4f";
  brick4.shapeColor="#8f4f4f";
  brick5.shapeColor="#8f4f4f";
  brick6.shapeColor="#8f4f4f";
  brick7.shapeColor="#8f4f4f";
  brick8.shapeColor="#8f4f4f";
  brick9.shapeColor="#8f4f4f";
  carrot.scale=0.5;
  if(bunny.isTouching(brick)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick1)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick2)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=300;
    bunny.y=550;
  }

  if(bunny.isTouching(brick5)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick6)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick7)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=300;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=3300;
    bunny.y=550;
  }
  
  carrot.shapeColor="#d97642";

  if(keyDown("up")){
    bunny.y = bunny.y - 10;
  }
  
  if(keyDown("down")){
    bunny.y = bunny.y + 10;
  }

  if(keyDown("left")){
    bunny.x = bunny.x - 10;
  }
  
  if(keyDown("right")){
    bunny.x = bunny.x + 10;
  }

 
  
  drawSprites();
  for(var i = 0 ; i< snakesGroup.length ; i++){
    var temp = snakesGroup.get(i);
    if(bunny.isTouching(temp)){
      bunny.x=300;
      bunny.y=550;
    }
  }
  if(bunny.isTouching(carrot)){
    text("YOU WIN",300,50);
    
  }
  if(frameCount % 50===0){
    var snakes = createSprite(600,random(70,520),random(30,120),5);
    snakes.velocityX = random(-4,-6);
    snakes.shapeColor="yellow";
    snakes.addImage(snakesImg);
    snakesGroup.add(snakes);
    snakes.scale=0.5;
  }
 
}

