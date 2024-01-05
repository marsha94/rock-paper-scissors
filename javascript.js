let playerCurrentPoints = 0;
let computerCurrentPoints = 0;
let round = 1;
const buttons = document.querySelector("[data-info='button-container']");
const roundInfo = document.querySelector("[data-info='result']");
buttons.addEventListener("click", playRound);

function computerSelection() {
  const choice = ["rock", "paper", "scissors"];
  choiceIndex = Math.floor(Math.random() * 3);
  return choice[choiceIndex];
}

function playerSelection(e) {
  const choice = e.target.getAttribute("data-info");
  return choice;
}

function results(playerChoice, playerPoints, computerChoice, computerPoints) {
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a draw. ";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You Win! ${
      playerChoice[0].toUpperCase() + playerChoice.slice(1)
    } beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
    playerPoints++;
  } else {
    result = `You Lose! ${
      computerChoice[0].toUpperCase() + computerChoice.slice(1)
    } beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}.`;
    computerPoints++;
  }

  return [result, playerPoints, computerPoints];
}

function playRound(e) {
  if (playerCurrentPoints == 5 || computerCurrentPoints == 5) {
    playerCurrentPoints > computerCurrentPoints
      ? (roundInfo.textContent = `You Win! Player points: ${playerCurrentPoints} Computer points: ${computerCurrentPoints}`)
      : (roundInfo.textContent = `Computer Win ! Player points: ${playerCurrentPoints} Computer points: ${computerCurrentPoints}`);
    return;
  }
  document.createElement("div");
  let playerChoice = playerSelection(e);
  let computerChoice = computerSelection();
  let roundStanding = results(
    playerChoice,
    playerCurrentPoints,
    computerChoice,
    computerCurrentPoints
  );
  playerCurrentPoints = roundStanding[1];
  computerCurrentPoints = roundStanding[2];

  roundInfo.textContent = `${roundStanding[0]} Player points: ${playerCurrentPoints} Computer points: ${computerCurrentPoints}\n`;
}
