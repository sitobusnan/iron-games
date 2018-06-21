function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.audio = new Audio("sounds/game.mp3");
  this.player = new Player(this);
  this.balls = [new Ball(this, 55, 500, 70), new Ball(this, 55, 1000, 70)];
  this.score = new Score(this);

  this.framesCounter = 0;
}

//-------------GAME START----------------

Game.prototype.start = function() {
  this.audio.play();
  this.intervalId = setInterval(
    function() {
      this.clear();
      this.draw();
      this.moveAll();
      this.checkCollision();
      this.clearBullets();
    }.bind(this),
    16
  );
};

//-------------GAME CLEAR----------------

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//-------------GAME DRAW---------------

Game.prototype.draw = function() {
  this.player.draw();
  this.score.draw();
  this.balls.forEach(function(e) {
    e.draw();
  });
  this.player.bullets.forEach(function(e) {
    e.draw();
  });
};

//-------------GAME MOVE ALL----------------

Game.prototype.moveAll = function() {
  this.balls.forEach(function(e) {
    e.moveAlone();
  });
  this.player.bullets.forEach(function(e) {
    e.move();
  });
  this.player.move();
};

//-------------GAME CHECKCOLLISION----------------

Game.prototype.checkCollision = function() {
  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].collidesWithPlayer(this.balls[i], this.player);
  }

  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].collidesWithBullets(this.balls[i], this.player.bullets, i);
  }
};

//-------------GAME CLEAR BULLETS----------------

Game.prototype.clearBullets = function() {
  this.player.bullets = this.player.bullets.filter(
    function(e) {
      return e.y > 0;
    }.bind(this)
  );
};

//--------------GAME OVER----------------------

Game.prototype.gameOver = function() {
  this.ctx.font = "115px 'Press Start 2P'";
  this.ctx.fillStyle = "Black";
  this.ctx.fillText("GAME OVER!", canvas.width * 0.15, canvas.height * 0.35);
  this.ctx.textBaseline = "top";
  clearInterval(this.intervalId);
};
