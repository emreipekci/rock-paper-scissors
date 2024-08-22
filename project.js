const container = document.querySelector("#container");
container.style.display = "none";

const start = document.querySelector(".btn-start");
start.addEventListener("click", function() {
    container.style.display = "block";
    start.style.display = "none";
    resultElement.textContent = "";
});

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


let resultElement = document.querySelector("#result");

var humanScore = 0;
var computerScore = 0;

function playRound() {
    getComputerChoice();

    let result = "";

    if (humanChoice === computerChoice) {
        result = "It is a tie!";
    }
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
                (humanChoice === "Paper" && computerChoice === "Rock") || 
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++;
        result = "You win! " + humanChoice + " beats " + computerChoice + ". " + humanScore + " - " + computerScore;   
    }
    else {
        computerScore++;
        result = "You lose! " + computerChoice + " beats " + humanChoice + ". " + humanScore + " - " + computerScore;   
    }    

    if (humanScore === 5) {
        result = "Human wins! The score is " + humanScore + " - " + computerScore;
        resetGame();
    }
    else if (computerScore === 5) {
        result = "Computer wins! The score is " + humanScore + " - " + computerScore;
        resetGame();
    }
    resultElement.textContent = result;
} 

function resetGame() {
    container.style.display = "none";
    start.style.display = "block";
    humanScore = 0;
    computerScore = 0;
}

setupEventListeners();


