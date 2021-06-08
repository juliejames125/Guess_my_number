"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreNumber = document.querySelector(".score");
const highNumber = document.querySelector(".highscore");
const again = document.querySelector(".again");
let score = 20;
let highscore = 0;
const intro = new Audio("./sounds/intro.mp3");
const game_over = new Audio("./sounds/game_over.mp3");
const win = new Audio("./sounds/game_win.mp3");
const click = new Audio("./sounds/click.mp3");
check.addEventListener("click", () => {
  click.play();
  let guessNumber = Number(document.querySelector(".guess").value);
  if (guessNumber > randomNumber) {
    if (score > 1) {
      message.textContent = "Too high";
      score--;
      scoreNumber.textContent = score;
    } else {
      message.textContent = "Game over!";
      document.body.style.backgroundColor = "red";
      game_over.play();
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      message.textContent = "Too low";
      score--;
      scoreNumber.textContent = score;
    } else {
      message.textContent = "Game over!";
      document.body.style.backgroundColor = "red";
      game_over.play();
    }
  } else if (randomNumber === guessNumber) {
    message.textContent = "Correct Number!";
    scoreNumber.textContent = score;
    document.querySelector(".number").textContent = randomNumber;
    document.body.style.backgroundColor = "#00ead3";
    win.play();
    if (score > highscore) {
      highscore = score;
      highNumber.textContent = highscore;
    } else {
      highNumber.textContent = highscore;
    }
  }
});

again.addEventListener("click", () => {
  click.play();
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreNumber.textContent = score;
  message.textContent = "Guess Number ...";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#000";
  document.querySelector(".number").textContent = "?";
});

// intro.play();
