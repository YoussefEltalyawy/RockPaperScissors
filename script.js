let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

let playerSelection = "";

const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

const resultEl = document.querySelector(".result");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[choiceIndex];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You Win! Scissors beats paper";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else {
    return "Tie!";
  }
}

rockBtn.addEventListener("click", function () {
  playerSelection = "rock";
  game();
});
paperBtn.addEventListener("click", function () {
  playerSelection = "paper";
  game();
});
scissorsBtn.addEventListener("click", function () {
  playerSelection = "scissors";
  game();
});

function game() {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerScoreEl.textContent = playerScore
  computerScoreEl.textContent = computerScore
  if (playerScore === 5) {
    resultEl.textContent = "Player wins!";
    setTimeout(resetGame, 1000); // Wait 5 seconds to reset
  } else if (computerScore === 5) {
    resultEl.textContent = "Computer wins!";
    setTimeout(resetGame, 1000);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
}
