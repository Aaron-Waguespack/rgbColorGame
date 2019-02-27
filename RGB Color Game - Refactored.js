var numSquares=6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	setupModeButtons();
	setupSquares();
	reset();
}	

function setupModeButtons(){
	for (var i=0; i< modeButtons.length; i++){
	  modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");	
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares =3: numSquares =6;
		reset();
	  });
	}
}	

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		//add inital colors to the squares
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square and compair to pickedColor
			var clickedColor = this.style.backgroundColor;
				if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor
				resetButton.textContent = "Play Again?"
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}	
		});
	reset();
	}
}

resetButton.addEventListener("click", function(){
	reset();})

for (var i = 0; i < squares.length; i++){
	//add inital colors to the squares
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square and compair to pickedColor
	var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor
			resetButton.textContent = "Play Again?"
		} else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}	
	});
}

function changeColors(color){
	//loop through all squares and change to match correct color
for (var i = 0; i < colors.length; i++ ){
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array and ad num random colors to array and return array
	var arr=[]
	for (var i =0; i <num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick 3 random numbers from 0-255
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g+ ", " + b + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	 // changes colors of squares
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display="block"	
		squares[i].style.backgroundColor=colors[i];

		}else {
			squares[i].style.display="none";
		}
	}
	h1.style.background = "steelblue"
}	