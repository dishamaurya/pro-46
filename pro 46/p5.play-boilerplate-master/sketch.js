var xPlayer, xImg;
var oPlayer, oImg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var backgrnd, bgImg;

var gameState = 0;
var playerCount;
var database;

var game, form, player;

function preload(){
 xImg = loadImage("X.png");
 oImg = loadImage("O.png");
 bgImg = loadImage("background.png");

}

function setup() {
  createCanvas(800,800);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
      
}

function draw() {
  background(200); 

  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}