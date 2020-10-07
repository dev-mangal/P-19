var 
bananaimg,obstacleimg,monkey,score,bananac,obstacleg,bananag,monkey_run,back,backimg,ing;

function preload(){
  monkey_run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backimg=loadImage("jungle.jpg");
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
}

function setup() {
  createCanvas(500, 300);
  back=createSprite(350,50,600,300);
  back.addImage(backimg);
  back.velocityX=-3;
  back.x=back.width/2;
  score=0;
  monkey=createSprite(100,220,20,50);
  monkey.addAnimation("monkeyrunning",monkey_run);
  monkey.scale=0.1;
  ing=createSprite(300,280,600,20);
  ing.visible=false;
  bananag=new Group();
  obstacleg=new Group();
}

function draw() {
  background(255);
  if(back.x<0){
  back.x=back.width/2;
  }
  if(keyDown("space")&&monkey.y>239){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ing);
  spawnObstacles();
  spawnBananas();
  if(monkey.isTouching(bananag)){
    bananag.destroyEach();
    score=score+10;
  }
  if(monkey.isTouching(obstacleg)){
    monkey.scale=0.1;
  }
  switch(score){
      case 50 : monkey.scale=0.15;
      break;
      case 100 : monkey.scale=0.2;
      break;
      case 150 : monkey.scale=0.3;
      break;
      case 200 : monkey.scale=0.4;
      break;
      case 250 : monkey.scale=0.5;
      break;
      default : break;
  }
  drawSprites();
  fill("white");
  textSize(18);
  text("Score = "+score,400,50);
}

function spawnObstacles(){
    if(frameCount % 300 === 0) {
    var obstacle = createSprite(500,280,10,40);
    obstacle.scale=0.15;
    obstacle.velocityX = - (6 + score/100);
    obstacle.lifetime=143;
    //generate random obstacles
    obstacle.addImage(obstacleimg);
              
    //add each obstacle to the group
    obstacleg.add(obstacle);
  }
}
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var cloud = createSprite(500,280,40,10);
    cloud.y = random(50,200);
    cloud.addImage(bananaimg);
    cloud.scale = 0.03;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 166;
    
    //add each cloud to the group
    bananag.add(cloud);
 }
  
}