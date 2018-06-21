function Power(canvas, ctx) {
  var randomPosX = Math.random() * canvas.width;
  var randomPosY = Math.ceil(
    Math.random() * (canvas.height * 20 - canvas.height) + canvas.height
  );
  this.x = randomPosX;
  this.y = randomPosY;
  this.vx = 1;
  this.vy = -7;
  this.radius = 15;
  this.color = "red";
  this.ctx = ctx;
  this.isAlive = true;
  this.counter = 0;
  this.image = new Image ();
  this.width = 43;
  this.height = 43;
}

Power.prototype.draw = function() {
  this.image.src = "images/present.png";
  this.ctx.drawImage(this.image, (this.x-17), (this.y-11), this.width, this.height);
};

Power.prototype.update = function() {
  this.counter++;
  if (this.counter % 50 == 0) {
    this.vx = this.vx * -1;
  }
  this.y += this.vy;
  this.x += this.vx;
  this.draw();
};

Power.prototype.collisionTop = function() {
  if (this.y <= -60) {
    this.isAlive = false;
  }
};
