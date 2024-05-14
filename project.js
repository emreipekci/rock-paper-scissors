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
    console.log(humanChoice);

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
       return humanChoice;
    }
    else {
        return null;
    }
}

var humanScore = 0;
var computerScore = 0;
