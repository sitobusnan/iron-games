function Game() {
  this.canvas = canvas
  this.canvas.width = 300;
  this.canvas.height = 534;
  this.ctx = ctx;
  this.background = new Image();
  this.background.src = './img/background.png';
  this.background.yPosition = 0;
  this.background.onload = (function() {
    this.background.isReady = true;
  }).bind(this);

  this.KEY_UP = 38;
  this.KEY_DOWN = 40;

  this.obstacleList = [];

  this.seconds = 0;
  this.multiplier = 0.01;

  this.score = Math.floor(this.seconds * this.multiplier);
}

/*Game.prototype.clearBackground = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};*/

Game.prototype.drawBackground = function() {
  //this.clearBackground();
  if (this.background.yPosition * -1 < this.background.height) {
    this.ctx.drawImage(this.background, 0, this.background.yPosition - 1, this.background.width, this.background.height);
    this.ctx.drawImage(this.background, 0, this.background.yPosition + this.background.height, this.background.width, this.background.height);
    this.background.yPosition -= 1;
  } else {
    this.background.yPosition = 0;
    this.ctx.drawImage(this.background, 0, this.background.yPosition, this.background.width, this.background.height);
  }

  this.updateObstacles();
  this.seconds += 1;
};

// Prototypes for obstacles

Game.prototype.addNewObstacle = function() {
  var obstacle = new Obstacle(this.width, this.canvas.height);
  this.obstacleList.push(obstacle);
}

Game.prototype.updateObstacles = function() {
    for (var i = 0; i < this.obstacleList.length; i++) {
      this.obstacleList[i].draw();
    }
}

Game.prototype.dotCollision = function (dot) {
  return dot.collide(this.obstacleList);

}

Game.prototype.checkObstacleLength = function() {
  if (this.obstacleList.length === 15 ) {
    return true;
  }
}

// Score

Game.prototype.drawScore = function(){
  ctx.font = "12px roboto";
  ctx.fillStyle = '#fff';
  ctx.fillText('SCORE: '+ Math.floor(this.seconds * this.multiplier), 20, 20);
};
