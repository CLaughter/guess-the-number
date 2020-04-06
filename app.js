// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

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

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please choose a number between ${min} and ${max}`, "red");
  }
  // Check if winner
  if (guess === winningNum) {
    // Game over - won
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winMsg} ${winningNum}`, "green");
  }
  // Check if incorrect
  else {
    // Wrong number
    let remaining = (guessesLeft -= 1);
    if (guessesLeft === 0) {
      // Game over - lost
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(`${lossMsg} ${winningNum}`, "red");
    } else {
      // Game continues - wrong answer
      setMessage(
        "Nope. You have " + `${remaining}` + " guesses remaining.",
        "blue"
      );
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
