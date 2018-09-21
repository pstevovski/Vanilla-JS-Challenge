// Variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const countdownTimer = document.querySelector(".countdown");
const playerOption = document.querySelector(".player_option");
const computer = document.querySelector(".computer_option");
const option = document.querySelectorAll(".option");
const playerScoreOutput = document.querySelector(".player_score");
const computerScoreOutput = document.querySelector(".computer_score");
let playerScore = 0;
let computerScore = 0;

// Start the game (hide the menues).
document.querySelector("#startGame").addEventListener("click", ()=>{
    document.querySelector(".intro_menu").style.display = "none";
    document.querySelector(".choose").style.display = "block";
})

// Get the choice selected by the player.
function updatePlayerOption(){
    document.querySelector(".game").style.display = "flex";
    const playerChoice = this.dataset.option;
    playerOption.innerHTML = `<img src="${playerChoice}.svg" width="70px" height="70px">`;
    
    // Store the player option in session storage.
    sessionStorage.setItem("playerOption", playerChoice);
    computerOption();
}

// Get a randomly selected choice by the computer.
function computerOption(){
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * computerOptions.length);
    computer.innerHTML = `<img src="${computerOptions[computerChoice]}.svg" width="70px" height="70px">`;

    // Store the computer option in session storage.
    sessionStorage.setItem("computerOption", computerOptions[computerChoice]);
    compare();
}

// Compare the chosen options between the player and the computer.
function compare(){
    // Get the choices from the session storage.
    const playerChoice = sessionStorage.getItem("playerOption");
    const computerChoice = sessionStorage.getItem("computerOption");

    // Player wins if the conditions are met.
    if(playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        playerScoreOutput.innerHTML = "Player: "+playerScore;
    }
    // Computer wins if the conditions are met.
    else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        computerScoreOutput.innerHTML = "Computer: "+computerScore;
    }
    // If choices are the same, its a draw, resulting in the computer making another choice.
    else if (playerChoice == computerChoice) {
       return computerOption();
    }
}

// Add event listeners to the choices buttons.
option.forEach(option => option.addEventListener("click", updatePlayerOption))

// TODO : Change the if statements with a Hash Table or a Switch / case option once I get a better understanding of these.