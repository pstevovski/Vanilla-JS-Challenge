const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let lastTime = false;
let timesUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const holeId = Math.round(Math.random() * holes.length);
    const hole = holes[holeId];
    if(hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(100, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if(!lastTime) peep();
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timesUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timesUp = true;
    }, 10000);
}

function bonk(e){
    if(!e.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));