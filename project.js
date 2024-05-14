/*When the user inputs a data
initialize a computer choice data
Compare these two data and give the score
play this 5 rounds and print the result
*/



function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};


function getHumanChoice() {
    var humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
       return humanChoice;
    }
    else {
        return null;
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors")
    }    
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
    }
    else {
        console.log("Equal! Select again")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(i) {
    for (let i = 1; i <= 5; i++) {
        playRound(humanSelection, computerSelection); 
    }
}

