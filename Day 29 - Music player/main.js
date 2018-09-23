// Songs
let songsArray = ["Armin van Buuren Feat Laura Jansen - Use Somebody The Armin Only Intense World Tour.mp3","Army of The Pharaohs - Bloody Tears Official Video.mp3","Coolio - Gangstas Paradise feat LV.mp3","David Bowie - Starman.mp3","Dr Dre - Still DRE ft Snoop Dogg.mp3","Skyrim - The Dragonborn Comes - Swedish Radio Symphony Orchestra  Sabina Zweiacker.mp3"]
// Song images
let songsImages = ["armin", "pharaoah", "coolio", "starman", "dre", "skyrim"];

// Global
let music = new Audio();
let songNumber = 0;
let enablePause = false;
let songImage = document.querySelector(".song_image");

// Commands
const prevSong = document.querySelector("#prevSong");
const nextSong = document.querySelector("#nextSong");
const playSong = document.querySelector("#playSong");
const stopSong = document.querySelector("#stopSong");
const play_pause = document.querySelector("#play_pause");

function song(){
    console.log(this);
    for(let i = 0; i < songsArray.length; i++){
        console.log(songsArray.length);
        music.src = `songs/${songsArray[songNumber]}`;
        songImage.style.backgroundImage = `url("images/${songsImages[songNumber]}.jpg")`;
    }
    if(enablePause == true) {
        play_pause.textContent = "pause_circle_outline";
        music.pause();
        console.log("pause enabled")
    }
    music.play();
}

function next() {
    play_pause.textContent = "pause_circle_outline";
    songNumber++;
    if(songNumber > 5){
        songNumber = 5;
    }
    song();
}

function previous() {
    play_pause.textContent = "pause_circle_outline";
    songNumber--;
    if(songNumber <= 0) {
        songNumber = 0;
    }
    song();
}

function stop() {
    music.pause();
    music.currentTime = 0;
}
// Event listeners
prevSong.addEventListener("click", previous);
nextSong.addEventListener("click", next);
playSong.addEventListener("click", ()=>{
    enablePause = !enablePause;
    play_pause.textContent = "play_circle_outline";
    song();
});
console.log(enablePause);
stopSong.addEventListener("click", stop);