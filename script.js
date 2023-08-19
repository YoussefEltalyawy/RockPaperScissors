function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[choiceIndex];
  return computerChoice
}

getComputerChoice()