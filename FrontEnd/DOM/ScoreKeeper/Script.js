// JavaScript Document

var p1Button = document.getElementById("P1");
var p2Button = document.getElementById("P2");
var resetButton = document.getElementById("R");
var p1Display = document.getElementById("spanP1");
var p2Display = document.getElementById("spanP2");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	   if(p1Score >= winningScore){
		   gameOver = true;
		   p1Display.classList.add("winner");
	   }
	p1Display.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	   if(p2Score >= winningScore){
		   gameOver = true;
		   p2Display.classList.add("winner");
	   }
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){

	reset();
});

numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	winningScoreDisplay.textContent = winningScore;
	reset();
	
});

function reset (){
		p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}