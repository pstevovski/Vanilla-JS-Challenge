window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Initiate a speech recognition.
const recognition = new SpeechRecognition();

recognition.interimResults = true;

// Create a new paragraph element.
let p = document.createElement("p");

// Append the new paragraph element to the words container.
const words = document.querySelector(".words");
words.appendChild(p);

// Listen for the result event which is triggered with speech recognition.
recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        p.textContent = transcript;
        // If we stop talking, create a new p element and append it to the words container.
        if(e.results[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p)
        }

        // If the transcript results ( the words spoken and read by the browswer ) include the sentence in the if statement below, you can run a function or call something that you'd like.
        if(transcript.includes('some words here')) {
            // run a function
            alert("Hi.");
        }
})

// Restarts the recognition function if we stop talking, that way making a new p element and appending it to the words container in the if statement above.
recognition.addEventListener("end", recognition.start);

recognition.start();