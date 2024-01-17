"use strict";

/*****************

Feelings
Pippin Barr

A creepy program that enjoys being interacted with a little too much. Says
things when different p5 events are triggered.

Uses:

p5.speech
https://idmnyu.github.io/p5.js-speech/

******************/

// Our speech synthesis object
let speechSynthesizer;

/**
Creates a canvas.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create our speech synthesizer
  speechSynthesizer = new p5.Speech();
  // Set its creepy British voice
  speechSynthesizer.setVoice(`Google UK Male`);
  // Set its creepy pitch
  speechSynthesizer.setPitch(0.5);
  // Set its creepy rate
  speechSynthesizer.setRate(0.5);
  // Tell it to interrupt itself
  speechSynthesizer.interrupt = true;
}


/**
Does nothing.
*/
function draw() {

}

// All remaining functions are different p5 events and responses from the program
function mousePressed() {
  say(`That's it. Press my mouse.`);
}

function mouseDragged() {
  say(`Drag me anywhere you want.`);
}

function mouseReleased() {
  say(`Don't let me go.`);
}

function doubleClicked() {
  say(`Never stop clicking.`);
}

function mouseWheel() {
  say(`Roll my wheel`);
}

function mouseMoved() {
  say(`Move my mouse.`);
}

function keyPressed() {
  say(`Keycode ${keyCode} is my favourite key.`);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  say(`That's the perfect size.`);
}

/**
Uses the synthesizer to say the provided speech parameter in its creepy voice.
*/
function say(speech) {
  // Say the current speech in a low and slow and gross way
  speechSynthesizer.speak(speech);
}