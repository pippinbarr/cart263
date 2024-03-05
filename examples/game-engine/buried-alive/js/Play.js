/**
The play scene that drives the overall game. Creates sprites representing
the avatar, the thumbs down, and the thumbs ups. Adds keyboard controls
for the avatar. Adds collisions and overlaps to handle physics and thumbs
down collection.
*/

class Play extends Phaser.Scene {

  /**
  Just sets the scene's key name
  */
  constructor() {
    super({
      key: `play`
    });
  }

  /**
  Does the lion's share of the work creating sprites and configuring them,
  as well as setting physics handlers and listening to the arrow keys.
  */
  create() {
    // Create the avatar
    this.avatar = this.physics.add.sprite(400, 500, `avatar`);
    // Set up a max velocity you can reach through accelerating
    this.avatar.setMaxVelocity(200, 200);
    // How rapidly does the avatar change speed (this will be applied as
    // gravity to the avatar, which is a bit hacky but kind of useful for
    // the prototype at least)
    this.avatar.speed = 500;

    // Create a group of thumbs down emojis with some basic
    // physics configuration
    this.sadness = this.physics.add.group({
      // Image key to use
      key: `thumbs-down`,
      // How many
      quantity: 120,
      // Gravity (how fast will they start and continue to fall)
      gravityY: 100,
      // Mass (how heavy are they)
      mass: 1
    });
    // Playing with the above numbers changes the feel (and probably the entire meaning
    // of this experience))

    // The crowd/dirt/whatever is falling...

    // Position all the members of the group in different ways to experiment with
    // different experiences of this...

    // Random rectangle?
    Phaser.Actions.RandomRectangle(this.sadness.getChildren(), this.physics.world.bounds);

    // A circle?
    // const circle = new Phaser.Geom.Circle(400, 300, 260);
    // Phaser.Actions.PlaceOnCircle(this.sadness.getChildren(), circle);

    // A line?
    // const line = new Phaser.Geom.Line(0, 100, this.game.canvas.width, 200);
    // Phaser.Actions.PlaceOnLine(this.sadness.getChildren(), line);

    // Add colliders between the avatar and the sadness, and the sadness and itself
    // so that we get physics for free!
    this.physics.add.collider(this.avatar, this.sadness);
    this.physics.add.collider(this.sadness, this.sadness);

    // Create our basic controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  /**
  Listens for user input
  */
  update() {
    this.handleInput();

    this.checkEnding();
  }

  /**
  Checks if the avatar is off the bottom (lose) or off the top (win)
  */
  checkEnding() {
    if (this.avatar.y > this.game.canvas.height) {
      // You lose.
      console.log("LOSER!")
    }
    else if (this.avatar.y < 0) {
      // You win.
      console.log("WINNER!");
    }
  }

  /**
  Moves the avatar based on changing the pull of gravity. How god-like of us.
  */
  handleInput() {
    // If either left or right is pressed, rotate appropriately
    if (this.cursors.left.isDown) {
      this.avatar.setGravityX(-this.avatar.speed);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setGravityX(this.avatar.speed);
    }
    // Otherwise stop rotating
    else {
      this.avatar.setGravityX(0);
    }

    // If the up key is pressed, accelerate in the current rotation direction
    if (this.cursors.up.isDown) {
      this.avatar.setGravityY(-this.avatar.speed);
    }
    // Otherwise, zero the acceleration
    else if (this.cursors.down.isDown) {
      this.avatar.setGravityY(this.avatar.speed);
    }
    else {
      this.avatar.setGravityY(0);
    }
  }
}