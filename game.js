// // Game Logic

const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

const guessNumber = Math.floor(Math.random() * 100);
let lives = 10;
let message = "";

$submitButton.onclick = () => {
  let userInput = document.getElementById("number-input").value;
  lives--;
  if (userInput == guessNumber) {
    location.href = "./win.html";
  } else if (lives == 0) {
    location.href = "./loose.html";
  } else if (userInput > guessNumber) {
    message = `Oops ! Your guess is to high. You have ${lives} lives remaining`;
  } else if (userInput < guessNumber) {
    message = `Oops ! Your guess is to low. You have ${lives} lives remaining`;
  }
  $message.style.visibility = "visible";
  $message.style.display = "inherit";
  $message.innerHTML = message;
  $lives.innerHTML = lives;
};
