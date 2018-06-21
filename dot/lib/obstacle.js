function Obstacle(width, y) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = this.randomX();
	this.y = y;
  this.height = 5;
	this.width = this.randomWidth();
}

// Draw Obstacle

Obstacle.prototype.draw = function () {
  this.ctx.save();
  this.ctx.fillStyle = "#FFF";
  this.ctx.beginPath();
  this.ctx.lineWidth = 2;
  this.ctx.moveTo(this.x, this.y + this.height);
  this.ctx.lineTo(this.x + this.width, this.y + this.height);
  this.ctx.stroke();
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.y -= obstacleSpeed;
  this.ctx.restore();
};

// Position X Random for Obstacles

Obstacle.prototype.randomX = function() {
  var randomX = Math.floor(Math.random() * 300);
  return randomX;
}

// Obstacle width Width Random

Obstacle.prototype.randomWidth = function() {
  var randomWidth = Math.floor(Math.random() * (200 - 20)) + 20;
  return randomWidth;
}

// Collision

Obstacle.prototype.collide = function(element) {
  return !(this.x + this.width < element.x ||
    (element.x - 2) + element.width < this.x ||
    this.y + this.height < element.y ||
    (element.y - 2) + element.height < this.y);
}
