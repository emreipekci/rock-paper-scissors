/*Get computer choice
  Get human choice
  Play a round and print the result
  Play the game for five rounds and print the result
*/



function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function getHumanChoice() {
    var humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();

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
    if (humanChoice === computerChoice) {
        alert("It is a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        alert("You win! Rock beats Scissors");   
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        alert("You lose! Rock beats Scissors");   
    }    
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        alert("You lose! Paper beats Rock");  
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        alert("You win! Paper beats Rock");    
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        alert("You lose! Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        alert("You win! Scissors beats Paper");
    }
    else {
        alert("You lose!");
    }
} 



function playGame() {
    let i = 1;
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("Human wins! The score is " + humanScore + " - " + computerScore)
    }
    else if (humanScore < computerScore) {
        alert("Computer wins! The score is " + humanScore + " - " + computerScore)
    } else {
        alert("It is a tie!")
    }
}

playGame();


