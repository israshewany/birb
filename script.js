var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
		text('WELCOME to flöppy birb', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
		reset();
}
 