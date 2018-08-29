var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

//  FUNCTIONS   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

resetButton.addEventListener("click",function(){
    reset();
});

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click",function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

function generateRandomColors(num){
    // make array 
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
    // add num random colors to array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function reset(){
    // generate new colors
    colors = generateRandomColors(numOfSquares);
    // pick new random color from array 
    pickedColor = pickColor();
    // Display new picked color
    colorDisplay.textContent = pickedColor;
    // change color of square
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}