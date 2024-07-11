
var computerChoice;
var humanChoice;

function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function getHumanChoice(choice) {
    humanChoice = choice;
    playRound();
}

function setupEventListeners() {
        const rockBtn = document.querySelector("#btn-rock");
        rockBtn.addEventListener("click", function() {
            getHumanChoice("Rock");
        });


        const paperBtn = document.querySelector("#btn-paper");
        paperBtn.addEventListener("click", function() {
            getHumanChoice("Paper");
        });


        const scissorsBtn = document.querySelector("#btn-scissors");
        scissorsBtn.addEventListener("click", function() {
            getHumanChoice("Scissors");
        });
};


var humanScore = 0;
var computerScore = 0;

function playRound() {
    getComputerChoice();

    if (humanChoice === computerChoice) {
        alert("It is a tie!")
    }
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
                (humanChoice === "Paper" && computerChoice === "Rock") || 
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++;
        alert("You win! " + humanChoice + " beats " + computerChoice);   
    }
    else {
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice);   
    }    

    if (humanScore === 5) {
        alert("Human wins! The score is " + humanScore + " - " + computerScore);
        resetGame();
    }
    else if (computerScore === 5) {
        alert("Computer wins! The score is " + humanScore + " - " + computerScore);
        resetGame();
    } 
} 

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

setupEventListeners();


