/*When the user inputs a data
initialize a computer choice data
Compare these two data and give the score
play this 5 rounds and print the result
*/

var choices = ["rock", "paper", "scissors"];
var randomChoice = choices[Math.floor(Math.random() * choices.length)];

function getComputerChoice() {
    return randomChoice;
};
