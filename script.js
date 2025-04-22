document.addEventListener("DOMContentLoaded", () => {
  const arsenal = ["rock", "paper", "scissors"];
  const rules = { rock: "paper", paper: "scissors", scissors: "rock" };
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
  const startBtn = document.querySelector("#start");
  const roundText = document.querySelector("#roundResult");
  const scoreText = document.querySelector("#currentScore");
  const winnerText = document.querySelector("#winner");

  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    return arsenal[Math.floor(Math.random() * arsenal.length)];
  }

  // make a function for updating score each round
  function updateScoreDisplay() {
    scoreText.textContent = `Player = ${humanScore}, Computer = ${computerScore}`;
  }

  // check for winner
  // update the winner ext
  //  and stop the game afterwards by disabling all 3 main buttons R P S
  function checkForWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
      winnerText.textContent =
        humanScore > computerScore
          ? `We have a winner!!! Your score is ${humanScore}`
          : `Better luck next time.`;
      // disable further play
      [rockBtn, paperBtn, scissorsBtn].forEach((btn) => (btn.disabled = true));
    }
  }
  // round logic with round text
  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === rules[computerChoice]) {
      roundText.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else if (computerChoice === rules[humanChoice]) {
      roundText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else {
      roundText.textContent = `It's a tie! You both chose ${humanChoice}`;
    }
    updateScoreDisplay();
    checkForWinner();
  }

  // add all 3 buttons for R P S
  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));

  // reset everything when Start is clicked
  startBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundText.textContent = "";
    winnerText.textContent = "";
    updateScoreDisplay();
    [rockBtn, paperBtn, scissorsBtn].forEach((btn) => (btn.disabled = false));
  });
});
