// JavaScript Document
var numSquares = 6;
var colors =  generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


var pickedColor = pickColor();

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	colorTheSquares ();
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
	
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// intial colors
	squares[i].style.backgroundColor = colors[i];
	//clicklistenes 
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	})
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors (num) {
	var arr = [];
	
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	
	return arr;
}

function randomColor (){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	
	var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
	
	return rgb;
	
}




function colorTheSquares () {
	for(var i = 0; i < squares.length; i++){
	// intial colors
	squares[i].style.backgroundColor = colors[i];
	}
}

