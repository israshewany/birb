var bird;
var pipes = [];
var score = 0;
var mySound;

function preload() {
  mySound = loadSound('harry.mp3');
  //img = loadImage('https://i1.sndcdn.com/avatars-000297971625-hku9dk-t500x500.jpg');
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bird = new bird();
  pipes.push(new Pipe());   
  mySound.play();
}

function draw() {
  if (screen == 0) {
    score = 0;
    startScreen() 
  } else if (screen == 1) {
    game()
  } else if (screen == 2) {
    endScreen();
    pipes = [];    
  }
}

function game() {

  background(51, 153, 255);
  text("score = " + score, 30,20)
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      screen = 2;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
    score+= 1
  }
}

function keyPressed() {
   mySound.play();
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}

function mouseClicked() {
 screen = 1;
 score = 0;
}

function bird() {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function () {
    this.velocity += this.lift;
  }

  this.update = function () {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
}                       