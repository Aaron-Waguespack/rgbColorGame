var numSquares=6;
var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	//changes background when selected
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		  squares[i].style.background = colors[i];	
		}else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	//changes background when selected
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];	
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// 	generate new colors, pick a new color from array,
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	h1.style.background = "steelblue"
	 // changes colors of squares
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	}
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//add inital colors to the squares
	squares[i].style.backgroundColor=colors[i];

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