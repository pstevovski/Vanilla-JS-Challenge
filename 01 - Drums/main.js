// Sounds
const boom = new Audio();
const clap = new Audio();
const hihat = new Audio();
const kick = new Audio();
const openHat = new Audio();
const ride = new Audio();
const snare = new Audio();
const tink = new Audio();
const tom = new Audio();

boom.src = "sounds/boom.wav";
clap.src = "sounds/clap.wav";
hihat.src = "sounds/hihat.wav";
kick.src = "sounds/kick.wav";
openHat.src = "sounds/openhat.wav";
ride.src = "sounds/ride.wav";
snare.src = "sounds/snare.wav";
tink.src = "sounds/tink.wav";
tom.src = "sounds/tom.wav";

// Listen for key pressed.
window.addEventListener("keydown", e => {
    // Get the key code for each pressed key.
    const key = e.keyCode;

    const drum = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // Play Boom sound if A is pressed
    if ( key === 65) {
        boom.play();
        boom.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Clap sound if S is pressed
    if ( key === 83) {
        clap.play();
        clap.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Hi-hat sound if D is pressed
    if ( key === 68) {
        hihat.play();
        hihat.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Kick sound if F is pressed
    if ( key === 70) {
        kick.play();
        kick.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Open Hat sound if G is pressed
    if ( key === 71) {
        openHat.play();
        openHat.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Ride sound if H is pressed
    if ( key === 72) {
        ride.play();
        ride.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Snare sound if J is pressed
    if ( key === 74) {
        snare.play();
        snare.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");       
    }
    // Play Tink sound if K is pressed
    if ( key === 75) {
        tink.play();
        tink.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
    // Play Tom sound if L is pressed;
    if ( key === 76) {
        tom.play();
        tom.currentTime = 0;
        // Add class to the drum element.
        drum.classList.add("drumActive");
    }
})
const drums = document.querySelectorAll(".drum");
drums.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(key){
    if(key.propertyName !== "transform") return;
    this.classList.remove("drumActive");
}