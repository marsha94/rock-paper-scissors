// * Interface: No interface
// * Input: Prompt user for choice (rock, paper, scissors)
// * Output: Win, lose, draw. Depends on user and computer choice

const choice = ["rock", "paper", "scissors"];
let playerSelection = prompt(
  "Please chose a selection: rock, paper, scissors"
).toLowerCase();

while (!choice.includes(playerSelection)) {
  playerSelection = prompt(
    "Incorrect input. Please chose a selection: rock, paper, scissors"
  ).toLowerCase();
}

let computerSelection = getComputerChoice();
function getComputerChoice() {
  choiceIndex = Math.floor(Math.random() * 3);
  return choice[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a draw. ";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rocks") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You Win! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection[0].toUpperCase() + computerSelection.slice(1)
    }.`;
  } else {
    result = `You Lose! ${
      computerSelection[0].toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}.`;
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));
