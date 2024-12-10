// create a function called "getComputerChoice"
// will get "randomly" rock paper or scissors
function getComputerChoice () {
    arsenal = ['rock', 'paper', 'scissors'];
    return arsenal[Math.round(Math.random() * 3)];
}

// create a function called "getHumanChoice" by using Prompt 
function getHumanChoice () {
    let choice = prompt("choose rock, paper or scissors!");
    return choice;
}

// keep track of the scores in "humanScore" and "computerScore" In the "global scope"
let humanScore;
let computerScore;


// make rules dict

const rules = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}

// create a function called "playRound" that takes the "humanChoice" and "computerChoice" as arguments and increment the score
// humanChoice must be case-insensitive
// it should return the winner using console.log in one of the 2 formats "You lose! "placeholder" beats placeholder" or "You win! ..."
function playRound ( humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == rules[computerChoice]){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else if(computerChoice == rules[humanChoice]){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }else {
        console.log("its a tie");
    }
}


// create a function called "playGame" 
  