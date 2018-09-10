const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediaStream =>{
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
            console.log(localMediaStream)
        })
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;

    // Transform the canvas with the set properties for width and height.
    canvas.width = width;
    canvas.height = height;

    return setInterval(()=>{
        ctx.drawImage(video, 0, 0, width, height);

        // Take the pixels out
        let pixels = ctx.getImageData(0,0,width,height);

        pixels = rgbSplit(pixels);
        // pixels = greenScreen(pixels);
        ctx.globalAlpha = 0.2;

        ctx.putImageData(pixels, 0, 0);
    }, 50)
}

document.getElementById("takePhoto").addEventListener("click", ()=>{ takePhoto() });

function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "handsome");
    link.innerHTML = `<img src="${data}" alt="Me..">`
    strip.insertBefore(link, strip.firstChild);
}
function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i +=4) {
        pixels.data[i - 150] = pixels.data[i+0]; // R
        pixels.data[i + 500] = pixels.data[i+1]; // G
        pixels.data[i - 550] = pixels.data[i+2]; // B
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);