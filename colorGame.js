var squares = document.querySelectorAll(".square");
var color = [] ;

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
			arr.push(getRandomColor());			
		}
	return arr;
}

function changeColors(color){
	for(var i = 0 ; i < squares.length ; i++)
	{
	squares[i].style.backgroundColor = color[i];
	}
}

addElement(3);

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
			 this.style.display="none"; // remove
			// this.style.visibility = "hidden";
			
			
		});
		
	}
}


color = generateRandomColors(squares.length);
changeColors(color);
initializeButtons ();