const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector(`[name="text"]`).value;

function populateVoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    console.log(voices);
}

function setVoices(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(setState = true){
    speechSynthesis.cancel();
    if(setState) {
        speechSynthesis.speak(msg);
    }
}

function changeOptions(){
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoices);
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", ()=>{  toggle(false)  })
options.forEach(option => option.addEventListener("change", changeOptions));