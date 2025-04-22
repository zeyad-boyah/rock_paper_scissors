// make an array with the "weapons ;)"
let arsenal = ["rock", "paper", "scissors"];

// make rules dict
const rules = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

// create a function called "getComputerChoice"
// will get "randomly" rock paper or scissors
function getComputerChoice() {
  return arsenal[Math.floor(Math.random() * 3)];
}

// create a function called "getHumanChoice" by using Prompt
function getHumanChoice() {
  let choice;
  let counter = 0;
  do {
    if (counter == 0) {
      choice = prompt("choose rock, paper or scissors!").toLowerCase();
    } else {
      choice = prompt("Invalid input! please choose rock, paper or scissors!").toLowerCase();
    }
    counter++;
  } while (!arsenal.includes(choice));
  return choice;
}

// create a function called "playGame" that called the need functions to play 5 rounds
function playGame() {
  // keep track of the scores in "humanScore" and "computerScore" In the "global scope"
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;
  // create a function called "playRound" that takes the "humanChoice" and "computerChoice" as arguments and increment the score
  // humanChoice must be case-insensitive
  // it should return the winner using console.log in one of the 2 formats "You lose! "placeholder" beats placeholder" or "You win! ..."
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == rules[computerChoice]) {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice == rules[humanChoice]) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log("its a tie");
    }
  }

  // for (i = 0; i < 5; i++) {
  //   humanSelection = getHumanChoice();
  //   computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  // }
  if (humanScore > computerScore) {
    console.log(`We have a winner!!! your score is ${humanScore}`);
  } else if (humanScore == computerScore) {
    console.log(`you are on par with the computer!!!`);
  } else {
    console.log(`better luck next time.`);
  }
}


playGame()

// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.