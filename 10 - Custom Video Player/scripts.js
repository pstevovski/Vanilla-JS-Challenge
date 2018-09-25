// Get the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggleBtn = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullscreen = player.querySelector(".fullscreen");
const ranges = player.querySelectorAll(".player__slider");

// Functions
function toggleVideo(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? "►" : " || ";
    toggleBtn.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function updateProgressBar(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function rangeHandler(){
    video[this.name] = this.value;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

let fullscreenMode = false;
function toggleFullscreen(){
    player.webkitRequestFullScreen();
}
// Event listeners
toggleBtn.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgressBar);
skipButtons.forEach(buttons => buttons.addEventListener("click", skip))

ranges.forEach(range => range.addEventListener("change", rangeHandler))
ranges.forEach(range => range.addEventListener("mousemove", rangeHandler))

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e)=>{
    if(mousedown) {
        scrub(e);
    }
})
progress.addEventListener("mousedown", ()=> mousedown = true);
progress.addEventListener("mouseup", ()=> mousedown = false);

fullscreen.addEventListener("click", toggleFullscreen);