/**
The Dead Zone
Pippin Barr

An avatar tries to get out of view of the camera chasing it to drop red thumbs-up
graffiti everywhere. This is peak political commentary. The idea here is to use a
standardized game design idea that is reflected in game making tools (camera
following the avatar) and turn it into a game mechanic.
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