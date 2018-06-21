  /**
   * HERO CONSTRUCTOR
   * Sets the variables for the hero and important methods
   * draw()       Crops and draws the sprites
   * move()       Moves the hero on the x axis and changes direction
   * walk()       Animation for the walk cycle
   * stopWalk()   Stops animations and sets an idle stance sprite
   * showHero()   Shows the hero on screen
   * hideHero()   Hide the hero on screen (for object zoom scenes)
   */



  Hero = function (game) {

    this.game = game;

    this.img = new Image();
    this.img.src = "images/walk.png";
    
    // Canvas properties
    this.img.frames = 16;
    this.img.frameIndex = 16;
    this.width = 4080;
    this.singleWidth = 240;
    this.singleHeight = 310;
    this.height = 310;

    // Hero position change:
    this.direction = 0; // 0 is <- Left - 1 is Right ->
    this.walking = false; // Is walk cycle animation on?
    this.speed = 7; // Speed of this.x increase / decrease

    // Initial position
    this.x = 600;
    this.y = 328;
  }

  Hero.prototype.draw = function () {
    this.game.ctx.drawImage(this.img,
      // Crop X                               Crop Y
      this.singleWidth * this.img.frameIndex, this.singleHeight * this.direction,
      // Crop width                           Crop Height
      this.singleWidth, this.singleHeight,
      // X on canvas                          Y on canvas
      this.x, this.y,
      // Scaled width                         Scaled height 
      this.singleWidth * 0.6, this.singleHeight * 0.6
    );
  }


  Hero.prototype.move = function () {

    // Set direction where the hero is facing
    // Left or right depends on this checkpoint:
    this.walking = true;

    // Moves hero to the right
    if (this.x <= this.game.zones.anchor) {
      this.direction = 1;
      this.x += 7;
    }
    // Moves hero to the left
    else {
      this.direction = 0;
      this.x -= 7;
    }

    // Starts walk cycle animation    
    this.game.hero.walk();

    // Listener to stop the walk when (destination - 4) is reached
    if (Math.abs(this.x - this.game.zones.anchor) < 4) {
      this.stopWalk();
    }
  }


  Hero.prototype.walk = function () {
    this.img.frameIndex = this.game.frameCounter;
  }


  // Stops walk cycle and sometimes hides the hero if needed

  Hero.prototype.stopWalk = function (moveInterval) {

    this.walking = false;
      
    // Stopped to enter interaction mode
    if (this.game.actions.prepareToHideFront === true) {
        this.game.hero.hideHero();
        this.game.foregroundElements = false;
      } 
    
    // Stopped to stand before object
      else {
        this.game.hero.showHero();
      }
    
    eval(this.game.actions.callback);
    eval(this.game.actions.updateSubtitles);
    if (this.game.actions.appearFromBorder === true){
      this.x = 1100;
      this.game.actions.appearFromBorder = false;
    }
    this.game.actions.reset();

  }

  Hero.prototype.hideHero = function () {
    this.img.frameIndex = 17;
  }

  Hero.prototype.showHero = function () {
    this.img.frameIndex = 16;
  }

  Hero.prototype.resetHero = function () {
    this.x = 1100;
    this.img.frameIndex = 16;
  }