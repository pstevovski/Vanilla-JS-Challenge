const secondsHandle = document.querySelector(".seconds");
const minutesHandle = document.querySelector(".minutes");
const hoursHandle = document.querySelector(".hours");
const currentTime = document.getElementById("currentTime");

function clock(){
    // Get the seconds
    const seconds = new Date().getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Get the minutes
    const minutes = new Date().getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // Get the hours
    const hours = new Date().getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    // Time now
    let timeNow = hours+":"+minutes+":"+seconds;
    currentTime.innerHTML = timeNow;
    // Move the handles
    secondsHandle.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHandle.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHandle.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(clock, 1000)

// Set alarm
const alarmInput = document.getElementById("alarmInput");
document.getElementById("setAlarm").addEventListener("click", setAlarm);

// Enter key.
window.addEventListener("keydown", e =>{
    if( e.keyCode === 13) {
        if(alarmInput.value){
            setAlarm();
        } else {
            alert("Set time for the alarm.");
        }
    }
})
function setAlarm(){
    let alarmTime = alarmInput.value;
    localStorage.setItem("alarmTime", alarmTime);
    runAlarm();
    alarmInput.value = "";
}

// Alarm sound
const alarmSound = new Audio();
alarmSound.src = "alarm.mp3";

function runAlarm(){
    // Get the time now
    const timeNowHours = new Date().getHours();
    const timeNowMinutes = new Date().getMinutes();
    const timeNow = timeNowHours+":"+ timeNowMinutes;
    const getAlarmTime = localStorage.getItem("alarmTime");
    
    if( timeNow === getAlarmTime){
        alarmSound.play();
        setTimeout(() => {
            localStorage.removeItem("alarmTime");
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }, 1000 * 30);
    }
}
// Check if the time matches with the set alarm every second.
setInterval(runAlarm, 1000);
