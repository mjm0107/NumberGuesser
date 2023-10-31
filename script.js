let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
  const humanDifference = Math.abs(target - humanGuess);
  const computerDifference = Math.abs(target - computerGuess);
  return humanDifference <= computerDifference;
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
