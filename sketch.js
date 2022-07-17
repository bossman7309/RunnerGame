var spaceImg, space;
var astroidImg astroid, astroidsGroup;
var spaceship2Img, spaceship2, spaceship2sGroup;
var invisibleBlockGroup, invisibleBlock;
var climberImg, climber, climbersGroup;
var gameState = "play"

function preload(){
  spaceImg = loadImage("space.png");
  astroidImg = loadImage("astroid.png");
  spaceshipImg = loadImage("spaceship2.png");
  climberImg = loadImage("spaceship2.png")
  
}

function setup(){
  createCanvas(600,600);
  
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  
  astroidsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  spaceship2 = createSprite(200,200,50,50);
  spaceship2.scale = 0.3;
  spaceship2.addImage("spaceship2", spaceship2Img);
}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
        spaceship2.x = spaceship2.x - 3;
    }
    if(keyDown("a")){
        spaceship2.x = spaceship2.x - 3;
    }
    if(keyDown("right_arrow")){
        spaceship2.x = spaceship2.x + 3;
    }

    if(keyDown("d")){
        spaceship2.x = spaceship2.x + 3;
    }

    if(keyDown("space")){
        spaceship2.velocityY = -10;
    }
    
    spaceship2.velocityY = spaceship2.velocityY + 0.8
    
    if(tower.y > 400){
      tower.y = 300
    }
    spawnAstroids();

    
    //climbersGroup.collide(spaceship2);
    if(climbersGroup.isTouching(spaceship2)){
        spaceship2.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(spaceship2) || spaceship2.y > 600){
        spaceship2.destroy();
      gameState = "end"
    }
    
    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

}

function spawnAstroids() {
  //write code here to spawn the astroids in the tower
  if (frameCount % 240 === 0) {
    var astroid = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    astroid.x = Math.round(random(120,400));
    climber.x = astroid.x;
    invisibleBlock.x = astroid.x;
    
    astroid.addImage(astroidImg);
    climber.addImage(climberImg);
    
    astroid.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    spaceship2.depth = astroid.depth;
    spaceship2.depth +=1;
   
    //assign lifetime to the variable
    astroid.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each astroid to the group
    astroidsGroup.add(astroid);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}


















//function preload(){

//}

//function setup() {
 
//}

//function draw() {
 
//}