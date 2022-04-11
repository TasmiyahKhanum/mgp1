var bgimg;
var database, gameState;
var form, player, playerCount;
var canvas;
var dragon,gon1;
var dragon2,gon2; 
var dragon3,gon3;
var dragons=[];
var allPlayers;

function preload(){
 bgimg=loadImage("assets/wallpaper2.jpg");
 dragon = loadAnimation("assets/d1.png","assets/d1.png","assets/d2.png","assets/d2.png","assets/d3.png",
 "assets/d3.png","assets/d4.png","assets/d4.png","assets/d5.png","assets/d5.png","assets/d6.png","assets/d6.png",
 "assets/d7.png","assets/d7.png");
 //dragon.playing=true;
 //dragon.looping=true;
 dragon2 = loadAnimation("assets/dd1.png","assets/dd1.png","assets/dd1.png","assets/dd2.png","assets/dd2.png",
 "assets/dd2.png","assets/dd3.png","assets/dd3.png","assets/dd3.png");
  //monarch.playing=true;
 //monarch.looping=true;
 dragon3 = loadAnimation("assets/ddd1.png","assets/ddd1.png","assets/ddd1.png","assets/ddd2.png","assets/ddd2.png",
 "assets/ddd2.png","assets/ddd3.png","assets/ddd3.png","assets/ddd3.png");
}

function setup(){
 //createCanvas(1250,613);
 canvas = createCanvas(windowWidth-18,windowHeight-0);
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
 //butterfly.frameDelay = 400;
 //butterflya.addAnimation('flap',butterfly);
 //monarch.frameDelay = 400;
 //monarcha.addAnimation('flap',monarch);
}

function draw(){
  textSize(15);
  text(mouseX+","+mouseY,mouseX,mouseY);
  background(bgimg);
  image(bgimg,0,0,width,height);

  if (playerCount === 3) {
    game.update(1);
  }

  if (gameState === 1) {
   game.play();
  }

  if (gameState === 2) {
  //game.showLeaderboard();
  game.end();
  }
 // butterfly.frameDelay = 10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}