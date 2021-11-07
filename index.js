var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var audio = null;
var isGameOn = false;

function nextSequence() {
	var randomNumber = Math.floor(Math.random()* 4);
	var chosenColor  = buttonColours[randomNumber];
	gamePattern.push(chosenColor);
	makeNoise(chosenColor);
	animatePress(chosenColor,200);
	
	console.log(randomNumber);
}

$(".btn").on("click",function (){
	makeNoise(this.id);	
	animatePress(this.id,100);	
	
});

function checkAnswer()
{
	
	
	
}

$(document).on("keydown",function (){
	
	if(!isGameOn)
	{
	  $("#level-title").text("Level " + level+1);
	  nextSequence();
	  isGameOn = true;	
	 
	}
	
});

function animatePress (color,time)
{
	$("#"+color).addClass( "pressed" );
	 
    setTimeout(function () {
     $("#"+color).removeClass("pressed");
    }, time); 
	
}


function makeNoise (color) {

	audio = new Audio ('sounds/'+color+'.mp3');
	audio.play();	
	
}