// Variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const countdownTimer = document.querySelector(".countdown");
const playerOption = document.querySelector(".player_option");
const computer = document.querySelector(".computer_option");
const option = document.querySelectorAll(".option");

// Start the game
document.querySelector("#startGame").addEventListener("click", ()=>{
    document.querySelector(".intro_menu").style.display = "none";
    document.querySelector(".choose").style.display = "block";
})

// // Rock options
// rock.addEventListener('click', ()=>{
//     playerOption.innerHTML = `<img src="rock.svg" width="60px" height="60px">`;
// })
// // Paper option
// paper.addEventListener("click", ()=>{
//     playerOption.innerHTML = `<img src="scroll.svg" width="60px" height="60px">`
// })
// // Scissors option
// scissors.addEventListener("click", ()=>{
//     playerOption.innerHTML = `<img src="scissors.svg" width="60px" height="60px">`;
// })


function updatePlayerOption(){
    const playerChoice = this.dataset.option;
    playerOption.innerHTML = `<img src="${playerChoice}.svg" width="60px" height="60p">`;
    
    // Store the selected option in session storage.
    sessionStorage.setItem("playerOption", playerChoice);
}

function computerOption(){
    const computerOptions = ["rock", "scroll", "scissors"];
    const computerChoice = Math.floor(Math.random() * computerOptions.length);
    computer.innerHTML = `<img src="${computerOptions[computerChoice]}.svg" width="60px" height="60px">`;

    // Store the computer option in session storage.
    sessionStorage.setItem("computerOption", computerOptions[computerChoice]);
    console.log(computerOptions[computerChoice]);
}

option.forEach(option => option.addEventListener("click", updatePlayerOption))