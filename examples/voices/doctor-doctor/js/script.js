"use strict";

/*****************

Doctor, doctor!
Pippin Barr

A simple therapy session between the Eliza chatbot and itself, using speech
output and speech input to conduct the session.

Designed to work with computer speakers feeding back into computer microphone.
No headphones.

Uses:

p5.speech
https://idmnyu.github.io/p5.js-speech/

Elizabot
https://www.masswerk.at/elizabot/

******************/

// Keep track of which voice to speak in
let doctor1Voice = "Google UK English Female";
let doctor2Voice = "Google UK English Male";
let currentVoice = doctor1Voice;
// A variable to hold our Eliza bot
let eliza;
// What is currently being said
let currentSpeech = ``;
// Our speech synthesis object
let speechSynthesizer;
// Our speech recognition object
let speechRecognizer;

/**
Create the canvas
*/
function setup() {
  createCanvas(500, 500);

  // Set up our speech stuff
  setupSpeech();
}

/**
Create our p5.speech objects and get them ready 
*/
function setupSpeech() {
  // Create the speech synthesizer
  speechSynthesizer = new p5.Speech();
  // Create the speech recognizer
  speechRecognizer = new p5.SpeechRec();
  // Tell it to be continuous (sorry)
  speechRecognizer.continuous = true;
  // Tell it the function to call when it hears something
  speechRecognizer.onResult = handleVoiceInput;
  // Start it up
  speechRecognizer.start();
  // For debug to see the voices we can use
}

/**
Display the currently spoken text
*/
function draw() {
  background(0);

  push();
  textSize(18);
  textAlign(CENTER);
  rectMode(CENTER);
  fill(255, 255, 0);
  text(currentSpeech, width / 2, height / 2, width - width / 10, height / 2);
  pop();
}

/**
Initialise elizabot and say her first line. Called on mouse click.
*/
function start() {
  // Create our eliza chatbot for processing the responses
  eliza = new ElizaBot();
  // Get her starting comment
  let initial = eliza.getInitial();
  // Set the voice
  speechSynthesizer.setVoice(currentVoice);
  // Say it
  speechSynthesizer.speak(initial);
}

/**
Called when p5.speech detects speech
*/
function handleVoiceInput() {
  // Add the interpretation to the string to display on the canvas
  currentSpeech = `"${speechRecognizer.resultString}"`;

  // Get Eliza's response to the first possible interpretation
  let response = eliza.transform(speechRecognizer.resultString);

  // Swap the doctor's voice so it's more conversational
  if (currentVoice === doctor1Voice) {
    currentVoice = doctor2Voice;
  }
  else {
    currentVoice = doctor1Voice;
  }
  // Set the voice
  speechSynthesizer.setVoice(currentVoice);
  // Add a delay so the recognizer has a chance to detect a pause
  setTimeout(() => {
    // Say the response (which will be picked up by the recognizer through the computer speakers, hopefully)
    speechSynthesizer.speak(response);
  }, 1000);
}

/**
Start the bots talking!
*/
function mousePressed() {
  start();
  speechSynthesizer.listVoices();
}