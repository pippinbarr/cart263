/**
Voice Input Experiments
Pippin Barr

Let's play around with p5.speech and speech recognition!
*/

"use strict";

// The recognition object
const speechRecognizer = new p5.SpeechRec();
// What was said most recently
let currentSpeech = `Speak to me.`;

/**
 * Set up the recognition object
 */
function setup() {
    createCanvas(500, 500);

    // Examples of the main possibilities for the engine
    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = false;
    // Start it up (request access to the mic)
    speechRecognizer.start();
}

/**
 * Just a canvas that displays what you said
 */
function draw() {
    background(20, 20, 20);

    push()
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(200, 200, 200);
    text(currentSpeech, width / 2, height / 2);
    pop();
}

/**
 * The function that is called when the system detects speech
 */
function handleSpeechInput() {
    // This is where we can *do* something with it
    if (speechRecognizer.resultValue) {
        currentSpeech = speechRecognizer.resultString;
    }
}