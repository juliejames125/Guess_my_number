"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").textContent = "Correct Number";
    if (highScore === score) {
      highScore = highScore;
      document.querySelector(".highscore").textContent = highScore;
    } else if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } else {
      highScore = highScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 1;
      document.querySelector(".message").textContent = "Game Over";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".message").textContent = "Guess my number";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").textContent = "?";
});
