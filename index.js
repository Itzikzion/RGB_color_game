var numOfButtons =document.querySelectorAll(".drum").length;
var audio = null;//new Audio('sounds/tom-1.mp3');



for (var i =0; i<numOfButtons;i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function() 
 {
	
	makeSound(this.innerHTML)  		
 }
);

}
document.addEventListener("keydown",function(event) {
	makeSound(event.key);	
	
});
	

function makeSound(key)
{
		switch(key) {
  case 'w':
    audio = new Audio('sounds/tom-1.mp3');
    break;
	
  case 'a':
    audio = new Audio('sounds/tom-3.mp3');
    break;
	
  case 's':
    audio = new Audio('sounds/tom-3.mp3');
    break;
	
  case 'd':
    audio = new Audio('sounds/tom-4.mp3');
    break;
	
  case 'j':
    audio = new Audio('sounds/snare.mp3');
    break;
	
  case 'k':
    audio = new Audio('sounds/crash.mp3');
    break; 
	
  case 'l':
    audio = new Audio('sounds/kick-bass.mp3');
    break;
	

  default:
    // code block
}
		
    audio.play();	
}
	
	
