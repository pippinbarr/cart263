"use strict";

/*****************

Re:programming
Pippin Barr

Requires the user to say things they love, all of which are programming-related.

Uses:

p5.speech
https://idmnyu.github.io/p5.js-speech/

******************/

// An array of things to love in programming (user will say these)
let loves = [
  `JavaScript`,
  `Object-Oriented Programming`,
  `destructuring`,
  `variables`,
  `arrow functions`,
  `functions`,
  `anonymous functions`,
  `programming`,
  `to code`,
  `JavaScript libraries`,
  `the VS Code text editor`,
  `Creative Computation`,
  `debugging`
];

// Current thing they're supposed to say they love
let currentLove = ``;
// What text to display on the canvas
let displayText = ``;
// The speech recognizer
const speechRecognizer = new p5.SpeechRec();

/**
Creates a canvas, sets text defaults, and sets up the recognizer to listen to
declarations of love.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Text defaults
  textSize(64);
  textStyle(BOLD);
  textAlign(CENTER);

  // Set up recognizer
  speechRecognizer.continuous = true;
  speechRecognizer.onResult = handleVoiceInput;
  speechRecognizer.start();

  // Choose a phrase for the user to say first
  newAffirmation();
}

/**
Displays the current display text on the canvas
*/
function draw() {
  background(255);

  text(displayText, width / 2, height / 2);
}

/**
Responds to voice input command. Checks whether the user said they love
the correct thing, and lets them know.
*/
function handleVoiceInput() {
  // Extract the loved thing with a regular expression
  // This is a bit "cute" but the idea here is that you're matching
  // what the user *said* againt he pattern "I love *" where the * is
  // whatever they said after "I love". match() here returns an array
  // and the *second* element of that array is whatever was matched
  // after "I love" -- e.g. what they said they loved
  // Regular expressions are deeply beautiful but pretty tricky too
  const lovedThing = speechRecognizer.resultString.match(/I love (.*)/)[1];
  // Check if what the user said matches the request
  // Convert both to lowercase to make matching easier
  if (lovedThing.toLowerCase() === currentLove.toLowerCase()) {
    // If they got it right, emphasize it
    displayText = `That's right,\nYou do love ${currentLove}.`;
    // Assign a new affirmation after five seconds
    setTimeout(newAffirmation, 2500);
  }
  else {
    // If they were wrong, mock them.
    displayText = `You love ${lovedThing}? No.\nTry again. Say "I love ${currentLove}."`;
  }
}

/**
Chooses a random thing to love and tells the user to say they love it.
*/
function newAffirmation() {
  currentLove = random(loves);
  displayText = `Say "I love ${currentLove}."`;
}