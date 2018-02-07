//przypisuje przyciski do zmiennych
var player1Button = document.querySelector("#player1Button");
var player2Button = document.querySelector("#player2Button");
var resetButton = document.querySelector("#resetButton");
var input = document.querySelector("input");

//zmienne poczatkowe wyników
var player1Score = 0;
var player2Score = 0;
var winningScore = 5;
var gameOver = false;

//przypisuje wyniki do zmiennych
var player1ScoreHtml = document.querySelector("h1 span");
var player2ScoreHtml = document.querySelector("#player2ScoreHtml");
var winningScoreDisplay = document.querySelector("p span");

//tworze event po nasicusicuy player 1
player1Button.addEventListener("click", function(){
	if (!gameOver){
		player1Score++;
		if(player1Score == winningScore){
			player1ScoreHtml.classList.add("winner");
			gameOver = true;
		}
	}
	player1ScoreHtml.textContent = player1Score;
});

//tworze event po nasicusicuy player 2
player2Button.addEventListener("click", function(){
	if (!gameOver){
		player2Score++;
		if(player2Score == winningScore){
			player2ScoreHtml.classList.add("winner");
			gameOver = true;
		}
	}
	player2ScoreHtml.textContent = player2Score;
});

//input
//problem przy rzutowaniu
input.addEventListener("change", function(){
	winningScore = input.value;
	//tutaj trzeba by bylo dad
	//winingScore = Number(input.value);
	//wtedy mozna dac === porownanie wyzej
	winningScoreDisplay.textContent = input.value;
	reset();
});

//reset button
resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
 	player1Score = 0;
	player2Score = 0;

	player1ScoreHtml.textContent = player1Score;
	player2ScoreHtml.textContent = player2Score;
	player1ScoreHtml.classList.remove("winner");
	player2ScoreHtml.classList.remove("winner");

	gameOver = false;
};