var squares = document.querySelectorAll(".square");
var levelButton = document.querySelectorAll(".level");
var color = [] ;
var level;

function getRandomColor ()
{
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0 ; i < num ; i++)
		{
			// arr.push(getRandomColor());
			arr.push("rgb(" + (0+(i*5)) + ", " + (0+(i*5)) + ", " + (0+(i*5)) + ")")
			
		}
	return arr;
}

function changeColors(color){
	for(var i = 0 ; i < squares.length ; i++)
	{
	squares[i].style.backgroundColor = color[i];
	}
}

// addElement();

function addElement(num)
{
	console.log(squares.length);
var r= document.getElementById("container");
for(var i = 0 ; i < num ; i++)
		{
			var n= document.createElement("div");
n.classList.add("square");
r.appendChild(n);		
		}
		squares = document.querySelectorAll(".square");
		console.log(squares.length);

}

function initializeButtons ()
{
	for(var i = 0 ; i < squares.length ; i++)
	{
		squares[i].addEventListener("click", function (){
			this.style.backgroundColor = "black";
			 // this.style.display="none"; // remove
			this.style.visibility = "hidden";
			
			
		});
		
	}
}

function initializeButtons2 ()
{
	for(var i = 0 ; i < levelButton.length ; i++)
	{
		levelButton[i].addEventListener("click", function (){
			for(var i = 0 ; i < levelButton.length ; i++)
			{
				if(levelButton[i]== this)				
				  this.classList.add("active");	
				
				else
				  levelButton[i].classList.remove("active");	
			}
	        level = this.textContent;
			// alert(level);
			
			
		});
		
	}
}

color = generateRandomColors(squares.length);
changeColors(color);
initializeButtons ();
initializeButtons2 ();