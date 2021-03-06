// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 4;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message"),
  winMsg = "Winner! Winner! Winner! The correct number is  ",
  lossMsg = "Sorry, you're out of turns and lost. The correct number was ";

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please choose a number between ${min} and ${max}`, "red");
  }
  // Check if winner
  else if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winMsg} ${winningNum}`);
  }
  // Check if incorrect
  else {
    // Wrong number
    let remaining = (guessesLeft -= 1);
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `${lossMsg} ${winningNum}`);
    } else {
      // Game continues - wrong answer
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(
        "Nope. You have " + `${remaining}` + " guesses remaining.",
        "blue"
      );
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  // Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
