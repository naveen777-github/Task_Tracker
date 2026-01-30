let randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);

let randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);
document.querySelector("img.img1").src =
  "./images/dice" + randomNumber1 + ".png";

document.querySelector("img.img2").src =
  "./images/dice" + randomNumber2 + ".png";

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "PLAYER1 WON!";
} else {
  document.querySelector("h1").innerHTML = "PLAYER2 WON!";
}
