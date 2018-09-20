let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(`[data-time]`);

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0 ) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    const display = `${minutes}:${remainder < 10 ? "0" : ""}${remainder}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    // This is for converting from 24h clock mode, to 12h clock mode (am/pm).
    // const adjustedHour = hour > 12 ? hour -12 : hour;
    endTime.textContent = `See you in ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function updateTimer(){
    const time = parseInt(this.dataset.time);
    timer(time);
}

buttons.forEach(button => button.addEventListener("click", updateTimer));
document.customForm.addEventListener("submit", function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})