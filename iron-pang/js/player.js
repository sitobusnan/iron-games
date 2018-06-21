function Player(game) {
  this.game = game;

  this.x = this.game.canvas.width * 0.5;
  this.y = 560;
  this.w = 85;
  this.h = 145;

  this.img = new Image();
  this.img.src = "img/metal-slug-player.png";
  this.img.frames = 12;
  this.img.frameIndex = 0;

  this.speed = 10;
  this.moveRight = false;
  this.moveLeft = false;

  this.bullets = [];

  this.setListeners();
}

//-------------PLAYER DRAW----------------

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    //drawImage(image1, sx1, sy1, sWidth1, sHeight1, dx, dy, dWidth, dHeight);
    this.img, //image
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );
};

//-------------PLAYER SHOOT----------------

Player.prototype.shoot = function() {
  this.bullets.push(new Bullet(this.game));
};

//-------------PLAYER SETLISTENERS----------------

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === RIGHT_KEY) {
      this.moveRight = true;
      if (this.img.frameIndex < 11) {
        this.img.frameIndex++;
      } else this.img.frameIndex = 6;
    }

    if (event.keyCode === LEFT_KEY) {
      this.moveLeft = true;
      if (this.img.frameIndex > 0) {
        this.img.frameIndex--;
      } else this.img.frameIndex = 5;
    }

    if (event.keyCode === SPACE) {
      this.shoot();
    }
  }.bind(this);

  document.onkeyup = function(event) {
    if (event.keyCode === RIGHT_KEY) {
      this.moveRight = false;
    }
    if (event.keyCode === LEFT_KEY) {
      this.moveLeft = false;
    }
  }.bind(this);
};

//-------------PLAYER MOVE----------------

Player.prototype.move = function() {
  if (this.moveRight == true) {
    if (this.x + this.w < this.game.canvas.width) this.x += this.speed;
  }

  if (this.moveLeft == true) {
    if (this.x > 0) this.x -= this.speed;
  }
};

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE = 32;
