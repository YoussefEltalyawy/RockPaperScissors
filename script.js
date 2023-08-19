function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[choiceIndex];
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if(playerSelection === "rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock"
  } 
  else if(playerSelection === "paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats paper"
  }
  else if(playerSelection === "scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors"
  }
  else if(playerSelection === "paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock"
  } 
  else if(playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats paper"
  }
  else if(playerSelection === "rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors"
  }
  else {
    return "Tie!"
  }
}

