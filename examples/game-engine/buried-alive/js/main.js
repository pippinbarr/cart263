/**
Buried Alive
Pippin Barr

A very fast prototype playing around with the idea of collisions, mass, gravity.
Your avatar is at the bottom and needs to get to the top, but stuff is falling
down on your and pushing you down (hence "buried alive"). Can you push/dodge
your way through in time? Does it feel suffocating and frustrating to be pushed
around like this?

Note to self: this concept could potentially convert to a semi-interesting simulation
of walking against the general flow of pedestrians? So frustrating.
*/

"use strict";

// Standard configuration for the game
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);