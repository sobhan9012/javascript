const randomnumber = Math.floor(Math.random() * 100) + 1;

const sumbit = document.querySelector('#subt');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  sumbit.addEventListener('click', function (e) {
    e.preventDefault();
    const userinput = document.querySelector('#guessField').value;
    const guess = parseInt(userinput);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than one');
  } else if (guess > 100) {
    alert('Please enter the number which has less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomnumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  document.querySelector('#guessField').value = '';
  guessSlot.textContent += `${guess} `;
  numGuess++;
  remaining.textContent = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
}
