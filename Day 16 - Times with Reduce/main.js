// Turn it into an array with [...] or Array.from();
const timeNodes = [...document.querySelectorAll(`[data-time]`)];

const seconds = timeNodes.map(node => node.dataset.time)
                // Returns the array that will then be split with out the ":" in between the strings and then returns an array again in which the strings will be converted into numbers.
                .map(timeCode =>{
                    const [mins, secs] = timeCode.split(":").map(parseFloat);
                    return (mins * 60) + secs;
                })
                // Sums up the ammount of all the seconds. Total is used as an accumulator, videoSeconds is referening to each of the seconds converted into numbers that are being added.
                .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = seconds;
// Math.floor gives you the whole number. Math.round rounds the number to the closest whole number.
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
console.log(seconds);