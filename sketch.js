
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var SurvivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  //making sprite for monkey.
  monkey=createSprite(100,290,10,10)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.2
  
  
  ground = createSprite (200,350,800,5)
  ground.velocityX = -4;
  
  ground.x = ground.width /2;
  if(ground.x==200){
    ground.x=400
  }
  
  
  
  
  bananaGroup = new Group();
  obstaceGroup = new Group();
  SurvivalTime=0
}


function draw() {
  // giving background colour
  background("white")
  
  stroke("red");
  textSize(20);
  fill("white")
  text("Score: "+ SurvivalTime, 500,50)
  SurvivalTime=Math.ceil(frameCount/frameRate())
  
  
  if(ground.x==200){
    ground.x=400
  }
  monkey.collide(ground)
  monkey.velocityY = monkey.velocityY + 0.6
  if(keyDown("space")&&monkey.y>280){
      monkey.velocityY = -14;
    }
  if (obstaceGroup.isTouching(monkey)){
    bananaGroup.setVelocityXEach (0)
    obstaceGroup.setVelocityXEach(0)
    SurvivalTime=0
    
  }
  else{
    stonef();
    bananaf();
    
    
  }
  
  
  
  
  
  
  drawSprites();
}
function bananaf(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,Math.round(random(120,200)),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=-1
    bananaGroup.add(banana)
  }
  
}

function stonef(){
  if(frameCount % 300 ==0){
    obstacle = createSprite(600,310,10,10)
    obstacle.velocityX= -5
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.2
    obstacle.lifetime = -1
    monkey.collide(obstacle)
    obstaceGroup.add(obstacle)
  }
}




