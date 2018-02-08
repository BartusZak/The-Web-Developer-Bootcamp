//wybieram html
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");


//zmienne na potrzeby gry
//ilosc kwadratow
var numSquares = 6;
//array z wszystkimi kolorami
var colors = generateRandomColors(numSquares);
//poszukiwany kolor
var pickedColor = pickColor();

//wyswietlam jaki kolor szukam dla usera
colorDisplay.textContent = pickedColor;


for (var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		if (pickedColor == this.style.backgroundColor){
			message.textContent = "Poprawny kolor!";
			h1.style.backgroundColor = pickedColor;
			newGame.textContent = "Jeszcze raz?";
			changeColor();
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Spróbuj ponownie!";
		}
	});
}

//eventlistener po nasicnieu NOWA GRA
newGame.addEventListener("click", function(){
	//nowa tablica kolorów
	colors = generateRandomColors(numSquares);
	//nowy szukany kolor
	pickedColor = pickColor();
	//zmieniam kolory na porstawie nowej tablicy
	for (var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//wyswietlam jaki kolor szukam dla usera
	colorDisplay.textContent = pickedColor;
	newGame.textContent = "Nowa gra";
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
})

//eventlistener po nasiscieniu łatwy
easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	message.textContent = "";
	//ilosc kawadratow
	numSquares = 3;
	//nowa tablica kolorów
	colors = generateRandomColors(numSquares);
	//nowy szukany kolor
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//zmieniam kolory na porstawie nowej tablicy
	for (var i=0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
		
	}
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	message.textContent = "";
	//ilosc kawadratow
	numSquares = 6;
	//nowa tablica kolorów
	colors = generateRandomColors(numSquares);
	//nowy szukany kolor
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//zmieniam kolory na porstawie nowej tablicy
	for (var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
	});

//zamiana kolorow
function changeColor(){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
}

//wybieram poszukiwany kolor
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//tworze array z kolorami
function generateRandomColors(num){
	//make an aray
	var arr = [];
	//add num radnom colors to array
	for (var i = 0; i< num; i++){
		//get random color and push into arr
		arr[i] = randomColor();
		//mozna tez tak
		//arr.push(randomColor());
	}
	return arr;
}

//tworze kolory
function randomColor(){
	//wybrac czerwony od 0 do 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}