
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup(){
  createCanvas(600,300);
  
  monkey = createSprite(85,250,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,280,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  if(keyDown("space")){
      monkey.velocityY = -8;   
    console.log(frameCount);
    
    }
  monkey.velocityY=monkey.velocityY+0.5//gravity;
  if(ground.width/2){
      ground.x = 300;
     }
  
  Food(); 
  Obstacle();
  //console.log(frameCount);
  monkey.collide(ground);
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time = "+survivalTime,100,50);
}

function Food(){

if(frameCount%80===0){
  banana = createSprite(380,170,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.y = Math.round(random(120,200))
  banana.lifetime = 120;
  FoodGroup.add(banana);
}
}

function Obstacle(){

if(frameCount%300===0){
  obstacle = createSprite(550,260,30,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacle.lifetime = 120;
  obstacleGroup.add(obstacle);
}

}
