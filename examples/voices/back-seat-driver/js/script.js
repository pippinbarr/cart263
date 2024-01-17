"use strict";

/*****************

Back-seat Driver
Pippin Barr

A car that can be driven around by the user's voice commands. There are
collectible stars on the screen to give you something to do so that you
can find out how terrible it is to try to drive a car with voice recognition
and its inevitable lag!

Commands are:
"Drive"
"Stop"
"Turn left"
"Turn right"

Uses:

p5.speech
https://idmnyu.github.io/p5.js-speech/


******************/

// The car
let car;

// The number of stars to collect and an array to hold them
const NUM_STARS = 10;
let stars = [];

// Our speech recognition object from p5.speech
let speechRecognizer;

/**
Create a canvas, a car to drive, all the stars
Setup speech
*/
function setup() {
  createCanvas(500, 500);

  // Start our car in the center
  car = new Car(width / 2, height / 2);

  createStars();
  setupSpeech();

}

/**
Create the correct number of five-pointed stars at random positions
*/
function createStars() {
  for (let i = 0; i < NUM_STARS; i++) {
    let star = new Star({
      x: random(0, width),
      y: random(0, height),
      innerRadius: 5,
      outerRadius: 10,
      points: 5
    });
    stars.push(star);
  }
}

/**
Setup speech for driving the car
*/
function setupSpeech() {
  // Create the recognizer object
  speechRecognizer = new p5.SpeechRec();
  // Tell it the function to call when it hears something
  speechRecognizer.onResult = handleVoiceInput;
  // Tell it to keep recognizing speech over time (multiple commands)
  // Remember all the ethical concerns in the documentation? Well, yeah.
  speechRecognizer.continuous = true;
  // Start it up
  speechRecognizer.start();
}


/**
Update the car and stars
*/
function draw() {
  background(0);

  car.update();

  // Go through all the stars backwards (because we may need to remove one)
  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    // Update the star
    star.update();
    // Calculate the distance to the car (for a simple overlap check)
    let d = dist(car.x, car.y, star.x, star.y);
    // If the car is within the outer radius of the star it overlaps
    if (d < star.outerRadius) {
      // Remove the star at this position from the array
      stars.splice(i, 1);
    }
  }
}

function handleVoiceInput() {
  // Grab the command as spoken, convert to lower case for ease of checking 
  let command = speechRecognizer.resultString.toLowerCase();
  // Check the commands
  switch (command) {
    case "drive":
      car.drive();
      break;
    case "stop":
      car.stop();
      break;
    case "turn left":
      car.turnLeft();
      break;
    case "turn right":
      car.turnRight();
      break;
    default:
    // Could consider some kind of default "I didn't understand you" thing here
  }
}