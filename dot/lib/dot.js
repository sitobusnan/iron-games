function Dot() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.img = new Image();
  this.img.src = './img/player1.png';
  this.speed = 0.5;
  this.img.isReady = false;
  this.img.onload = (function() {
    this.img.isReady = true;
  }).bind(this);

  this.x = 140;
  this.y = 70;
  this.width = 20;
  this.height = 20;

  this.sate = "stop";

  this.isFalling = false;

  this.KEY_UP = 38;
  this.KEY_DOWN = 40;
  this.KEY_LEFT = 37;
  this.KEY_RIGHT = 39;
  this.KEY_CTRL = 17;
}

Dot.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  switch (this.state) {
    case "stop":
      this.moveStop();
      break;
    case "down":
      this.moveDown();
      break;
    case "up":
      this.moveUp();
      break;
    case "right":
      this.moveRight();
      break;
    case "left":
      this.moveLeft();
      break;
  }

  if ((this.y + this.height) >= this.canvas.height) {
    this.state = 'up'
  }
  if ((this.y + this.height/4) <= 0) {
    this.state = 'down'
  }
  if ((this.x + this.width) >= this.canvas.width) {
    this.state = 'left'
  }
  if ((this.x + this.width/4) <= 0) {
    this.state = 'right'
  }

};

Dot.prototype.update = function() {
  this.draw();
};

Dot.prototype.moveUp = function(){
  this.y -= 5;
};

Dot.prototype.moveRight = function(){
  this.x += 5;
};

Dot.prototype.moveDown = function(){
  this.y += 5;
};

Dot.prototype.moveLeft = function(){
  this.x -= 5;
};

Dot.prototype.moveStop = function(){
  this.x = this.x;
  this.y = this.y;
};

// Collision with obstacle

Dot.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    return true;
  }
  return false;
};
