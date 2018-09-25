// Songs
let songsArray = ["Armin van Buuren Feat Laura Jansen - Use Somebody The Armin Only Intense World Tour","Army of The Pharaohs - Bloody Tears Official Video","Coolio - Gangstas Paradise feat LV","David Bowie - Starman","Dr Dre - Still DRE ft Snoop Dogg","Skyrim - The Dragonborn Comes - Swedish Radio Symphony Orchestra  Sabina Zweiacker"]

// Song images
let songsImages = ["armin", "pharaoah", "coolio", "starman", "dre", "skyrim"];

// Global
let music = new Audio();
let songNumber = 0;
let playing = false;
let songImage = document.querySelector(".song_image");
let duration;
const songDuration = document.querySelector("#song_duration");
const songName = document.querySelector("#song_name");
const progressBarFill = document.querySelector(".progress_bar_filled");
const progressBar = document.querySelector(".progress_bar")
const songCurrent = document.querySelector("#song_currentTime");

// Commands
const prevSong = document.querySelector("#prevSong");
const nextSong = document.querySelector("#nextSong");
const playSong = document.querySelector("#playSong");
const stopSong = document.querySelector("#stopSong");
const pauseSong = document.querySelector("#pauseSong");

// On page load display the data for the first song in the playlist.
window.onload = function displayData(){
    for(let i = 0; i < songsArray.length; i++){
        music.src = `songs/${songsArray[songNumber]}.mp3`;
        songImage.style.backgroundImage = `url("images/${songsImages[songNumber]}.jpg")`;
    }
    songName.classList.add("active");
    songName.textContent = songsArray[songNumber];
    displayPlaylist();
}

// Play the song.
function song(){
    for(let i = 0; i < songsArray.length; i++){
        music.src = `songs/${songsArray[songNumber]}.mp3`;
        songImage.style.backgroundImage = `url("images/${songsImages[songNumber]}.jpg")`;
    }
    songCurrent.style.display = "block";
    music.play();
    
    // Needed to get the music.duration.
    music.onloadedmetadata = function (){
        duration = music.duration;
        getDuration(duration);
    }
    songName.classList.add("active");
    songName.textContent = songsArray[songNumber];
}

// Get the duration of the song (minutes/seconds).
function getDuration(duration){
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    songDuration.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Next song.
function next() {
    songName.classList.remove("active");
    songNumber++;
    if(songNumber >= 5){
        songNumber = 5;
    }
    song();
}

// Previous song.
function previous() {
    songName.classList.remove("active");
    songNumber--;
    if(songNumber <= 0) {
        songNumber = 0;
    }
    song();
}

// Stop the song currently playing.
function stop() {
    music.pause();
    music.currentTime = 0;
}

// Fill the progress bar as the song progresses trough its duration.
function updateProgressBar(){
    const percent = (music.currentTime / music.duration) * 100;
    progressBarFill.style.width = `${percent}%`;
    if(percent == 100){
        next();
    }
    showCurrentTime();
}

// Display the current time of the songs duration.
function showCurrentTime(){
    const minutes = Math.floor(music.currentTime / 60);
    const seconds = Math.floor(music.currentTime % 60);
    songCurrent.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Skip to the point where user clicked on the progress bar.
function scrub(e){
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * music.duration;
    music.currentTime = scrubTime;
}


// Event listeners
prevSong.addEventListener("click", previous);
nextSong.addEventListener("click", next);
playSong.addEventListener("click", song);
pauseSong.addEventListener("click", ()=> music.pause());
stopSong.addEventListener("click", stop);
music.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("click", scrub);
