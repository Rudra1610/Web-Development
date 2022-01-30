var randNum1 = Math.floor(Math.random() * 6 + 1);
var randNum2 = Math.floor(Math.random() * 6 + 1);

// Random Numbers
var randomImageSource1 = "images/dice" + randNum1 + ".png";
document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", randomImageSource1);

// Random Image Source
var randomImageSource2 = "images/dice" + randNum2 + ".png";
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", randomImageSource2);

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randNum2 > randNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
