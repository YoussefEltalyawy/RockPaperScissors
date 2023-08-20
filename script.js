let score = 0;
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[choiceIndex];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "Paper") {
    score = score;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    score = score;
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    score = score;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    score++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    score++;
    return "You Win! Scissors beats paper";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    score++;
    return "You Win! Rock beats Scissors";
  } else {
    score = score;
    return "Tie!";
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Please select: ")
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(score)
}

game();
