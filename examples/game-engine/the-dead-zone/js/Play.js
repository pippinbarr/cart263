/**

This is the class that handles all the action!

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
    // We want our scene to be bigger than the canvas itself
    // Using `this.variableName` here as a way to have "global" variables
    // inside this class. It's the same idea as when we put them at the
    // top of our program, but localized to the class Play here.
    this.width = this.game.canvas.width * 4;
    this.height = this.game.canvas.height * 4;

    // Create our world (which is larger than our canvas, necessitating moving
    // the camera to see it all)
    this.physics.world.setBounds(0, 0, this.width, this.height);

    // Setting a ridiculously bad background of tiled images just so we
    // can see motion. This is prototyping baby! (Also tileSprite is kind of
    // cool?)
    this.background = this.add.tileSprite(this.width / 2, this.height / 2, this.width, this.height, "thumbs-down");

    // Create the avatar (the unsure face)
    this.avatar = this.physics.add.sprite(400, 400, `avatar`);
    // It should collide with the edges of the world we just set up
    this.avatar.setCollideWorldBounds(true);
    // Some control over how fast it moves in x,y
    this.avatar.setMaxVelocity(300, 300);
    // And how fast it turns
    this.avatar.rotationSpeed = 300;
    // And how much it accelerates
    this.avatar.thrust = 800;
    // These are numbers we can tweak to change the game feel

    // Set up the camera to follow the avatar
    this.cameras.main.startFollow(this.avatar, true, 0.05, 0.05);
    // Use a dead zone that controls when the camera starts to move to follow
    this.cameras.main.setDeadzone(500, 500);
    // Set the boundary of the camera to the world so it does see past the edges
    this.cameras.main.setBounds(0, 0, this.width, this.height);

    // Create our standard controls (arrow keys, space, shift are available)
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  /**
  Listens for user input
  */
  update() {
    this.handleInput();
  }

  /**
  Moves the avatar based on the arrow keys for rotation and thrust
  */
  handleInput() {
    // If either left or right is pressed, rotate appropriately
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-this.avatar.rotationSpeed);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(this.avatar.rotationSpeed);
    }
    // Otherwise stop rotating
    else {
      this.avatar.setAngularVelocity(0);
    }

    // If the up key is pressed, accelerate in the current rotation direction
    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(this.avatar.rotation, this.avatar.thrust, this.avatar.body.acceleration);
    }
    // Otherwise, zero the acceleration
    else {
      this.avatar.setAcceleration(0);
    }

    // Handle our "graffiti"
    // Check if they pressed space, our graffiti key
    if (this.cursors.space.isDown) {
      // Check if the avatar is visible on camera by seeing if the avatar's position
      // is inside the camera's current view of the world. Imagine all the math
      // you would be doing otherwise!
      if (this.cameras.main.worldView.contains(this.avatar.x, this.avatar.y)) {
        // If so... that is bad... something should happen, but this is a tiny
        // prototype so it just tell you.
        console.log("Caught!");
      }
      else {
        // If not, create a thumbs-up sprite that will appear in this spot
        const sprite = this.add.sprite(this.avatar.x, this.avatar.y, `thumbs-up`);
        // Tint it red so it's all graffiti-like
        sprite.setTint(0xff0000);
      }
    }
  }
}