var screen = 0;
var y=-20;
var x=200;
var speed = 2;


function startScreen(){
	background(187, 153, 255)
	fill(255)
	textAlign(CENTER);
	text('WELCOME to flöppy birb', width / 2, height / 2);  
	text('click to start', width / 2, height / 2 + 20);

  let highscore = localStorage.getItem('highscore');
  text('Highscore: ' + highscore, width / 2, height / 2 + 40);
  
} 

function endScreen(){
	background(255, 0, 0)
	fill(255)
	text('GAME OVER ', width / 2, height / 2);
  textAlign()
	text('click to start again', width / 2, height / 2 + 20);
  text("SCORE =  " + score, width / 2, height / 2 + 40); 
  
  let highscore = localStorage.getItem('highscore');

  if (score > highscore)
     localStorage.setItem('highscore', score);
 
   
} 

