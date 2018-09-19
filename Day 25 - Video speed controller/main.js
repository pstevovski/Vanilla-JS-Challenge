const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");

function handler(e){
    // Calculate the difference between where the user mouse in the speed bar is, and the top of the page.
    const y = e.pageY - this.offsetTop;

    // Turn that difference into a percent.
    const percent = y / this.offsetHeight;
    // Minimum and maximum values for the playback rate.
    const min = 0.5;
    const max = 5;

    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    
    // Change the height of the bar according to the height variable that is being calculated.
    bar.style.height = height;

    // Change the text content inside the bar to match the playback rate.
    bar.textContent = playbackRate.toFixed(2) + "x";

    // Change the playback rate of the video to be accoding to how much the user has "selected".
    video.playbackRate = playbackRate;
}

// Attach an event listener to the speed bar handler.
speed.addEventListener("mousemove", handler);