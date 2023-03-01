console.log("This is linked");
const welcome = alert(
  `Welcome! This is Nick's secret number guessing game, Good luck!`
);
let playerName = prompt(`What's your name?`);
const highGuess = `Nope! Guess a lower number next time!`;
const lowGuess = `Nope! guess higher next time!`;
const correctGuess = `Congrats ${playerName}, you guessed the secret number correctly!`;
var guessHistory = [];
var guessCount = 0;
let secretNumber = Math.floor(Math.random() * 100);
console.log(secretNumber);

function newSecretNumber() {
  alert(
    `${playerName}, it took you ${guessCount} guesses last time. See if you can get a better score!`
  );
  secretNumber = Math.floor(Math.random() * 100);
  console.log(secretNumber);
  guessHistory = [];
  return otherGuesses();
}

// function firstGuess() {
//   let firstGuess = prompt(
//     `Please guess a number! You have 8 guesses to find the secret number!`
//   );
//   guessHistory.push(firstGuess);
//   if (firstGuess == secretNumber) {
//     alert(`Wow, first try! Congratulations ${playerName}!`);
//     return playingAgain();
//   } else {
//     guessCount + 1;
//     return otherGuesses();
//   }
// }

function otherGuesses() {
  let otherGuess = prompt(`Guess a number! Guess history: ${guessHistory}`);
  guessCount += 1;
  guessHistory.push(otherGuess);
  if (otherGuess == secretNumber) {
    alert(correctGuess);
    alert(`It took you ${guessCount} attempts to guess the number correctly!`);
    return playingAgain();
  } else if (otherGuess < secretNumber) {
    alert(lowGuess);
  } else if (otherGuess > secretNumber) {
    alert(highGuess);
  }
  console.log(guessHistory);
  return otherGuesses();
}

function playingAgain() {
  let playAgain = prompt(`Would you like to play again? Y/N`);
  if (playAgain.toLowerCase() == "y") {
    return newSecretNumber();
  } else if (playAgain.toLowerCase() == "n") {
  }
}
//test comment
