//declare variables
var player1,player2,rock1,rock2,fence,fence2,board1,board2;;
var heli1,heli2;
var bullet,bullet2;
var invisibleGround,invisibleGround2,invisibleGround3,invisibleGround4;
var barrel , barrelImg;
var inWall,inWall2;
var eg2,pg2,pg1;
var wall,wall1;
var pgb1,pgb2,egb2;
var shield;
var health,healthbar,healthbar2;

var score;
var score2;
var score3;

var score4;
var score5;

var gate;
var START = 1;
var PLAY = 0;
var END = 0;
var gameState = START;

var loseImg , loseImg2 , wonImg;

var drop1,drop2,drop3;
var dive1,dive2;

var restart,start;

var inst;

var entrImg;

var enter;

var bgm,es,ps;

function preload(){
  //preloadImages

  bgImage = loadImage("warbg.png");

  lplayer = loadAnimation("Lplayer.png");
  rplayer = loadImage("Rplayer.png");

  Lsit = loadAnimation("Lsit.png")
  Rsit = loadAnimation("Rsit.png")

  rock1Img = loadImage("rock5.png");
  rock2Img = loadImage("rock4.png");

  heli1Img = loadAnimation("heli1.png");
  heli2Img = loadAnimation("heli2.png");

  dive1Img = loadImage("dive1.png");
  dive2Img = loadImage("dive2.png");

  drop1Img = loadImage("drop1.png");
  drop2Img = loadImage("drop2.png");
  drop3Img = loadImage("drop3.png");

  bulletImg = loadImage("bull1.png");
  bulletImg2 = loadImage("bull2.png");

  jmpImage = loadAnimation("jmp1.png");
  jmp2Image = loadAnimation("jmp2.png");

  heli1FlipImg = loadAnimation("heli1flip.png");
  heli2FlipImg = loadAnimation("heli2flip.png");

  barrelImg = loadImage("barrel.png")

  eg1Img = loadImage("eg1.png");
  eg2chng = loadAnimation("eg2chng.png");
  eg2Img = loadAnimation("eg2.png");
  pg2Img = loadImage("eg3.png");
  pg1chng = loadAnimation("pg1chng.png");
  pg1Img = loadAnimation("pg1.png");

  wallImg = loadImage("wall.png");
  wall1Img = loadImage("wall1.png")

  egb1Img = loadImage("egb1.png");
  egb2Img = loadImage("egb2.png")
  pgb1Img = loadImage("pgb1.png");

  pgb2Img = loadImage("pgb2.png");

  shieldImg = loadImage("shld.png");

  healthImg = loadImage("hlth.png");    
  healthbarImg = loadImage("healthbar.png");
  healthbar2Img = loadImage("healthbar2.png");

  gateImg = loadImage("gate.png");

  wonImg = loadImage("won.webp");
  loseImg = loadImage("lose.png")
  loseImg2 = loadImage("lose2.png");

  restartImg = loadImage("rst.png");
  startImg = loadImage("strt.png");

  instImg = loadImage("1stscreen.png");
  entrImg = loadImage("future shooter.png");
  
  bgm = loadSound("bgm.mp3");
  es = loadSound("es.wav");
  ps = loadSound("ps.wav");
}

function setup() {
  createCanvas(2050,850);

  //base sprites
  gate = createSprite(10,500,50,50);
  gate.addImage(gateImg);
  gate.scale = 2.2;
  gate.setCollider("rectangle",20,0,220,250);

  //drop sprites
  drop1 = createSprite(1330,130,50,50);
  drop1.addImage(drop1Img);
  drop1.scale = 0.02;
  drop2 = createSprite(500,155,50,50);
  drop2.addImage(drop2Img);
  drop2.scale = 0.1;
  drop3 = createSprite(1100,150,50,50);
  drop3.addImage(drop3Img);
  drop3.scale = 0.1;

  //dive sprites
  dive1 = createSprite(100,100,50,50);
  dive1.addImage(dive1Img);
  dive1.scale = 0.4;
  dive2 = createSprite(900,200,50,50);
  dive2.addImage(dive2Img);
  dive2.scale = 0.1;

  //space vehicle sprites
  heli1 = createSprite(50,200,50,50);
  heli1.addAnimation("heli1",heli1Img);
  heli1.addAnimation("heli1flip",heli1FlipImg);
  heli1.scale = 0.5;
  heli1.velocityX = 8;
  heli2 = createSprite(2030,200,50,50);
  heli2.addAnimation("heli2",heli2Img);
  heli2.addAnimation("heli2flip",heli2FlipImg);
  heli2.scale = 0.6;
  heli2.velocityX = -8;

  //player1 sprites
  player1 = createSprite(155,445,50,50);  
  player1.addAnimation("jump",jmpImage);
  player1.addAnimation("sit",Lsit);
  player1.addAnimation("lplayer",lplayer);
  player1.scale =  0.78;
  player1.setCollider("rectangle",0,0,0,520);
  player1.visible = true;

  //player2 sprites
  player2 = createSprite(1650,730,50,50);
  player2.addAnimation("rplayer",rplayer);
  player2.scale = 1.3;
  player2.setCollider("rectangle",-80,0,-1,300);
  player2.visible=true;

 //groups
  bulletGroup = createGroup();
  bullet2Group = createGroup();

  egb1Group = createGroup();
  egb2Group = createGroup();
  pgb1Group = createGroup();
  pgb2Group = createGroup();

  shieldGroup = createGroup();

  //wall sprites
  wall = createSprite(300,15,50,0);
  wall.addImage(wallImg);
  wall.scale = 1.5;
  wall1 = createSprite(1850,40,50,50);
  wall1.addImage(wall1Img);
  wall1.scale = 2;

  //enemy guns
  eg2 = createSprite(1895,120,50,50);
  eg2.addAnimation("eg2",eg2Img);
  eg2.addAnimation("eg2chng",eg2chng);
  eg2.scale = 1;
  eg2.setCollider("rectangle",10,10,460,150);

  //player guns
  pg1 = createSprite(110,180,50,50);
  pg1.addAnimation("pg1",pg1Img);
  pg1.addAnimation("pg1chng",pg1chng);
  pg1.scale=0.5;
  pg1.setCollider("rectangle",0,10,250,400);
  pg1.visible=true;

  //health bar sprites
  health = createSprite(500,30,50,50);
  health.addImage(healthImg);
  health.scale = 0.1;

  healthbar = createSprite(760,60,50,50);
  healthbar.addImage(healthbarImg);

  healthbar2 = createSprite(1250,60,50,50);
  healthbar2.scale=0.75;
  healthbar2.addImage(healthbar2Img);
  
  //scores
  //player health score
  score = 100;
  //base health score
  score2 = 100;
  //enemy health score
  score3 = 100;
  //player gun health score
  score4 = 30;
  //enemy gun health score
  score5 = 30;
 
  //start button
  start = createSprite(1000,700,50,50);
  start.addImage(startImg);
  //restart button
  restart = createSprite(995,50,50,50);
  restart.addImage(restartImg);
  restart.scale = 0.2;
  //instructions sprite
  inst = createSprite(480,700,50,50);
  inst.addImage(instImg);
  inst.scale = 2;
  //entry screen game logo
  enter = createSprite(1000,300,50,50);
  enter.addImage(entrImg);
  enter.scale = 1.2;

  invisibleGround = createSprite(1025,830,2050,5);
  invisibleGround.visible = false;
  invisibleGround2= createSprite(10,425,5,830);
  invisibleGround2.visible = false;
  invisibleGround3 = createSprite(1025,5,2050,5);
  invisibleGround3.visible= false;
  invisibleGround4 = createSprite(2045,425,5,830);
  invisibleGround4.visible = false;
}

function draw() {
  
//game entry screen
if(gameState === START){
    //white background
    background("white");
    //making all sprites invisible
    player1.visible = false;
    player2.visible = false;
    eg2.visible=false;
    pg1.visible=false;
    wall.visible = false;
    wall1.visible = false;
    healthbar.visible = false;
    healthbar2.visible = false;
    gate.visible = false;
    dive1.visible = false;
    dive2.visible = false;
    drop1.visible = false;
    drop2.visible =false;
    drop3.visible =false;
    score.visible=false;    
    heli1.visible =false;
    heli2.visible=false;
    health.visible = false;
    restart.visible = false;
    egb2Group.destroyEach();
    pgb1Group.destroyEach();
    pgb2Group.destroyEach();    
}
//making the game start by pressing on start button
if(mousePressedOver(start)){
    gameState = PLAY;
    bgm.play();
}
//changing to game state play
else if(gameState === PLAY){
    //changing background image
    background(bgImage);
    //making all sprites visible
    start.visible = false;
    inst.visible = false;
    enter.visible = false;
    player1.visible = true;
    player2.visible = true;
    player1.visible = true;
    player2.visible = true;
    eg2.visible=true;
    pg1.visible=true;
    wall.visible = true;
    wall1.visible = true;
    healthbar.visible = true;
    healthbar2.visible = true;
    gate.visible = true;
    dive1.visible = true;
    dive2.visible = true;
    drop1.visible = true;
    drop2.visible =true;
    drop3.visible = true;
    heli1.visible =true;
    heli2.visible=true;
    health.visible = true;
    restart.visible = true;
   
    //displaying respective scores
    //score for player
    textSize(50);
    fill("white");
    textFont("CooperBlack");
    text(" " +score,680,50);
    //score for base
    textSize(46);
    fill("white");
    textFont("Eras Bold ITC");
    text(" " +score2,660,105);
    //score for enemy
    text(""+score3,1235,50);
    //score for player gun
    text(""+score4,350,105);
    //score for enemy gun
    text(""+score5,1600,85);
      
    //changing the depth of player and guns
    pg1.depth = player1.depth;
    player1.depth = pg1.depth +1;
  
    //changing the depth of the wall and base
    gate.depth = wall.depth;
    gate.depth = gate.depth + 1;
  
    //spawning the bullet from player gun
if(keyWentDown(13)){
    ps.play();
    Spawnbullet();
  } 
     
  //changing the position of the player when clicked on respective keys
if(keyIsDown(UP_ARROW)){
  player1.changeAnimation("jump",jmpImage);
  player1.setCollider("rectangle",50,-30,0,450);
  player1.y -= 25;
  }
if(keyIsDown(DOWN_ARROW)){
  player1.changeAnimation("jump",jmpImage);
  player1.setCollider("rectangle",50,-30,0,450);
  player1.y += 25;
  }
if(keyIsDown(RIGHT_ARROW)){
  player1.x += 25;
  player1.changeAnimation("lplayer",lplayer);
  player1.setCollider("rectangle",50,-30,0,450);
  }
  
if(keyIsDown(LEFT_ARROW)){
  player1.changeAnimation("lplayer",lplayer);
  player1.setCollider("rectangle",50,-30,0,450);
  player1.x -= 25;
  }
     
  //making the player not to cross the screen
  player1.bounce(invisibleGround);
  player1.bounce(invisibleGround2);
  player1.bounce(invisibleGround3);
  player1.bounce(invisibleGround4);
  player2.bounce(invisibleGround);
  
  //changine the space ships animation
if(heli1.isTouching(invisibleGround4)){
  heli1.bounceOff(invisibleGround4);
  heli1.changeAnimation("heli1flip",heli1FlipImg);
  }

if(heli1.isTouching(invisibleGround3)){
  heli1.bounceOff(invisibleGround3);
  heli1.changeAnimation( "heli1",heli1Img);
  }
  
if(heli2.isTouching(invisibleGround3)){
  heli2.bounceOff(invisibleGround3);
  heli2.changeAnimation("heli2flip",heli2FlipImg);
  }
  
if(heli2.isTouching(invisibleGround4)){
  heli2.bounceOff(invisibleGround4);
  heli2.changeAnimation("heli2",heli2Img);
  }
  
  //defending the bullets from enemy by shield
if(bullet2Group.isTouching(shieldGroup)){
  bullet2Group.destroyEach();
  }
if(egb2Group.isTouching(shieldGroup)){
  egb2Group.destroyEach();
  }
if(pgb2Group.isTouching(player2)){
  score3 = score3 - 10;
  pgb2Group.destroyEach();
  }

  //applying functions
  SpawnEgb2();
  Spawnbullet2();
  Spawnpgb();
  decreaseScore();
  SpawnShield(); 
  
if(keyWentUp(16)){
  shieldGroup.destroyEach();
  }
  
  //changing the depth of bullets and shield
  bullet2Group.depth = shieldGroup.depth;
  bullet2Group.depth = shieldGroup.depth+1;
}

  //creating functions for score
  if(score4 === 0){
    pg1.changeAnimation("pg1chng",pg1chng);
    egb2Group.destroyEach();
    pgb1Group.destroyEach();
  }
  if(score5 === 0){
    eg2.changeAnimation("eg2chng",eg2chng);  
    pgb1Group.destroyEach();
    egb2Group.destroyEach();
  }
  if(score === 0){
    gameState = END;
    background(loseImg);
    player1.visible = false;
    player2.visible = false;
    eg2.visible=false;
    pg1.visible=false;
    wall.visible = false;
    wall1.visible = false;
    healthbar.visible = false;
    healthbar2.visible = false;
    gate.visible = false;
    dive1.visible = false;
    dive2.visible = false;
    drop1.visible = false;
    drop2.visible =false;
    drop3.visible =false;
    score.visible=false;    
    heli1.visible =false;
    heli2.visible=false;
    health.visible = false;
    egb2Group.destroyEach();
    pgb1Group.destroyEach();
    pgb2Group.destroyEach();
    bullet2Group.destroyEach();
    bulletGroup.destroyEach();
    bgm.stop();
    es.stop();
  }
  if(score2 === 0){
    gameState = END;
    background(loseImg2);
    player1.visible = false;
    player2.visible = false;
    eg2.visible=false;
    pg1.visible=false;
    wall.visible = false;
    wall1.visible = false;
    healthbar.visible = false;
    healthbar2.visible = false;
    gate.visible = false;
    dive1.visible = false;
    dive2.visible = false;
    drop1.visible = false;
    drop2.visible =false;
    drop3.visible = false;
    score.visible=false;    
    heli1.visible =false;
    heli2.visible=false;
    health.visible = false;
    egb2Group.destroyEach();
    pgb1Group.destroyEach();
    pgb2Group.destroyEach();
    bullet2Group.destroyEach();
    bulletGroup.destroyEach();
    bgm.stop();
    es.stop();
  }
  if(score3 === 0){
    gameState = END;
    background(wonImg);
    player1.visible = false;
    player2.visible = false;
    eg2.visible=false;
    pg1.visible=false;
    wall.visible = false;
    wall1.visible = false;
    healthbar.visible = false;
    healthbar2.visible = false;
    gate.visible = false;
    dive1.visible = false;
    dive2.visible = false;
    drop1.visible = false;
    drop2.visible =false;
    drop3.visible = false;
    score.visible=false;
    heli1.visible =false;
    heli2.visible=false;
    health.visible = false;
    egb2Group.destroyEach();
    pgb1Group.destroyEach();
    pgb2Group.destroyEach();
    bullet2Group.destroyEach();
    bulletGroup.destroyEach();
    bgm.stop();
    es.stop();
    }
    //changine gamestate to end
  else if(gameState === END){

  }

  //applying restart funtion
  if(mousePressedOver(restart)){
    reset();
  }
  
  drawSprites();


function Spawnbullet(){
     bullet = createSprite(300,300,20,20);
     bullet.x = player1.x;
     bullet.x = player1.x+155;
     bullet.y = player1.y;
     bullet.y = player1.y-140;
     bullet.velocityX = 30;
     bullet.lifetime = 600;
     bullet.addImage(bulletImg);
     bullet.scale = 0.09;
     bullet.depth = player1.depth;
     player1.depth = player1.depth+1;
     bulletGroup.add(bullet);
}

function Spawnbullet2(){
  if(World.frameCount%100===0){
  bullet2 = createSprite(300,337,20,20);
  bullet2.x = player2.x;
  bullet2.x = player2.x-155;
  bullet2.y = player2.y;
  bullet2.y = player2.y-120;
  bullet2.velocityX = -25;
  bullet2.lifetime = 600;
  bullet2.addImage(bulletImg2);
  bullet2.scale = 0.3;
  bullet2.depth = player2.depth;
  player2.depth = player2.depth+1;
  bullet2.setCollider("circle",0,0,10);
  bullet2Group.add(bullet2);
  es.play();
}
}

function SpawnEgb2(){
  if(World.frameCount%150=== 0){
    egb2 = createSprite(1655,120,50,50);
    egb2.addImage(egb2Img);
    egb2.velocityX = -12;
    egb2.depth = eg2.depth;
    eg2.depth = egb2.depth + 1;
    egb2.scale = 0.15;
    egb2Group.add(egb2);
  }
  
}

function Spawnpgb(){
  if(World.frameCount%150=== 0){
    pgb1 = createSprite(280,115,50,50);
    pgb1.addImage(pgb1Img);
    pgb1.velocityX = 12;
    pgb1.depth = pg1.depth;
    pg1.depth = pgb1.depth + 1;
    pgb1.scale = 0.15;
    pgb1Group.add(pgb1);
  }
  
}
 

function SpawnShield(){
  if(keyWentDown(16)){
    shield = createSprite(800,player1.y,50,50);
    shield.addImage(shieldImg);
    shield.y = player1.y;
    shield.scale = 1;
    shield.setCollider("rectangle",-10,10,10,300);
    shieldGroup.add(shield)
  }
}

function decreaseScore(){
  
  if(bullet2Group.isTouching(player1)){
    score = score - 10;
    bullet2Group.destroyEach();
  }
  if(bullet2Group.isTouching(gate)){
    score2 = score2 - 5;
    bullet2Group.destroyEach();
  }
  if(egb2Group.isTouching(player1)){
    score = score - 10;
    egb2Group.destroyEach();
  }
  if(bulletGroup.isTouching(player2)){
    score3 = score3 - 5;
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(eg2)){
    score5 = score5 - 2;
    bulletGroup.destroyEach();
  }
  if(egb2Group.isTouching(pg1)){
    score4 = score4 - 2;
    egb2Group.destroyEach();
  }
  if(pgb1Group.isTouching(eg2)){
    score5 = score5 - 2;
    pgb1Group.destroyEach();
 }
  if(pgb2Group.isTouching(player2)){
    score3 = score3 - 2;
    pgb2Group.destroyEach();
  }
}
 
function reset(){
  gameState =PLAY
  background(bgImage);
    player1.visible = true;
    player2.visible = true;
    eg2.visible=true;
    pg1.visible=true;
    wall.visible = true;
    wall1.visible = true;
    healthbar.visible = true;
    healthbar2.visible = true;
    gate.visible = true;
    dive1.visible = true;
    dive2.visible = true;
    drop1.visible = true;
    drop2.visible =true;
    drop3.visible = true;
    heli1.visible =true;
    heli2.visible=true;
    health.visible = true;
    score = 100; 
    score2 = 100;
    score3 = 100;
    
    score4 = 30;
    score5 = 30;
}
}