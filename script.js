//Use the arrow keys to move your player from the top of the screen to the bottom of the screen. Watch out for the moving objects. 

/* VARIABLES */
let avoider1, avoider2, avoider3, avoider4;
let player;
let score = 0;



function setup() {
  createCanvas(400, 400);
  background(137, 213, 210);

  //Create the player 
  player = new Sprite(200, 20, 30);
  player.color = "black";

  //Create the avoiders
  avoider1 = new Sprite(10, 100, 120, 20, "k");
  avoider1.color = "green";
  avoider1.vel.x = 3;

  avoider2 = new Sprite(-100, 200, 80, 20, "k");
  avoider2.color = "blue";
  avoider2.vel.x = 5;

  avoider3 = new Sprite(-100, 250, 180, 20, "k");
  avoider3.color = "purple";
  avoider3.vel.x = 2;
  
  avoider4 = new Sprite(-100, 300, 20, 20, "k");
  avoider4.color = "red";
  avoider4.vel.x = 10;
}

function draw() {
  background(137, 213, 210);

  //Program the player to move
  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }

  //Reset avoider locations once they reach edge of screen 
  if (avoider1.x > width) {
    avoider1.x = -50;
  } 

  if (avoider2.x > width) {
    avoider2.x = -50;
  } 

  if (avoider3.x > width) {
    avoider3.x = -50;
  } 
  
  if (avoider4.x > width) {
    avoider4.x = -50;
  } 

  //Don't let the player move off the screen
  if (player.y < 20) {
    player.y = 20;
  } else if (player.y > 400) {
    player.vel.x = 0;
    player.vel.y = 0;
    youWin();
  }

  if (player.x < 20) {
    player.x = 20;
  } else if (player.x > 380) {
    player.x = 380;
  }


  //Check if player collides with avoiders
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3)|| player.collides(avoider4)) {
    score -= 1;
    player.x = 200;
    player.y = 20;
  } 

  fill(0);
  textSize(12);
  text("Score = " + score, 50, 30);
}

function youWin() {
  //Draw avoiders off of screen
  avoider1.x = -200;
  avoider1.vel.x = 0;
  avoider2.x = -500;
  avoider2.vel.x = 0;
  avoider3.x = -1000;
  avoider3.vel.x = 0;
  avoider4.x = -1000;
  avoider4.vel.x = 0;

//if statement for spice
  if (score == 0) {
    score = 376616;
  } else if(score > -3){
    score = 0.208;
  } else {
    score = 3507;
  }
  
  //Display you win message
  fill(0, 128, 128);
  textAlign(CENTER);
  textSize(20);
  text('You win!', 200, 200);
}