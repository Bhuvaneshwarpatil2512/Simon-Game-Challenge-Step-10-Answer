
//dice 1;
var ramdomNumber1 = Math.floor(Math.random() * 6) + 1 ; //1-6;

var randomdiceSource = "dice" + ramdomNumber1 + ".png"; // dice1.png-dice6.png;

var randomImageSource = "images/" + randomdiceSource; //image/dice1.png-image/dice6.png;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//die 2;
var ramdomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + ramdomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//player wins;

if(ramdomNumber1 > ramdomNumber2){
  document.querySelector("h1").innerHTML = "🚩 player 1 wins $ ";
}
else if(ramdomNumber1 < ramdomNumber2){
  document.querySelector("h1").innerHTML = "🏳️‍🌈 player 2 wins $ ";
}
else {
  document.querySelector("h1").innerHTML = "🎌 $Draw$ 🎌";
}
