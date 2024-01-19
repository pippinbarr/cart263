/**
Voice Output Experiments Testbed
Pippin Barr

Let's play around with p5.speech and speech synthesis!
*/

"use strict";

// The synthesis object
const speechSynthesizer = new p5.Speech();

// For triggering something via callbacks we'll show "subtitled"
let showSubtitle = false;

// The phrase to speak (changing this changes... well, everything)
let toSay = `I'm crawling through\nyour air conditioning\nducts right now.`;

function setup() {
    createCanvas(500, 500);

    // Synthesis settings to play with
    speechSynthesizer.setPitch(0.2);
    speechSynthesizer.setRate(0.5);
    speechSynthesizer.setVoice(`Google UK English Male`);

    // Two callbacks to try out (something to happen when speech starts and ends)
    // In this case we toggle the subtitles
    // We're using anonymous arrow functions here, but you could also assign named
    // functions
    speechSynthesizer.onStart = () => {
        showSubtitle = true;
    };
    speechSynthesizer.onEnd = () => {
        showSubtitle = false;
    };

    // Print the list of voices to the console to choose amongst them
    console.log(speechSynthesizer.listVoices());
}

/**
 * Displays the subtitles or not depending on speech output
 */
function draw() {
    background(227, 127, 111);

    if (showSubtitle) {
        textSize(36);
        text(toSay, 100, 100);
    }
}

/**
 * Says the text provided with the settings provided
 */
function mousePressed() {
    // Say something!
    speechSynthesizer.speak(toSay);
}