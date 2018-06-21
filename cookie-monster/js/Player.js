function Player(game, x) {
  this.game = game;

  this.x1 = x;
  this.y = this.game.canvas.height * 0.84;
  this.xmin = 0;
  this.xmax = this.game.canvas.width;
  this.w = this.game.canvas.width * 0.05;
  this.h = this.game.canvas.height * 0.1;
  this.vx = 6;
  this.index = 0;
  this.player1 = new Image();
  this.player1.src = "img/monster.png";

  this.player2 = new Image();
  this.player2.src = "img/monstereat.png";

  this.bullet = [];
  this.shots = true;
  this.players = [false, false];
}
Player.prototype.move = function() {
  if (this.players[1] === true) {
    if (this.x1 + this.w >= this.game.canvas.width) return;
    this.x1 += this.vx;
  }
  if (this.players[0] === true) {
    if (this.x1 <= 0) this.x1 = 0;

    this.x1 -= this.vx;
  }
  this.bullet.forEach(function(e) {
    e.move();
  });
};

Player.prototype.trueRight = function() {
  this.players[1] = true;
};
Player.prototype.falseRight = function() {
  this.players[1] = false;
};

Player.prototype.trueLeft = function() {
  this.players[0] = true;
};
Player.prototype.falseLeft = function() {
  this.players[0] = false;
};
Player.prototype.shoot = function() {
  this.bullet.push(new Bullet(game, this.x1, this.w, this.y));
};
Player.prototype.draw = function() {
  if (this.index == 0) {
    this.game.ctx.drawImage(this.player1, this.x1, this.y, this.w, this.h);
  } else {
    this.game.ctx.drawImage(this.player2, this.x1, this.y, this.w, this.h);
    this.index--;
  }
  this.bullet.forEach(function(e) {
    e.draw();
  });
};
Player.prototype.eats = function() {
  this.index += 5;
};
Player.prototype.small = function() {
  this.w /= 2;
  this.h /= 2;
  this.y = this.game.canvas.height * 0.89;
  setTimeout(
    function() {
      this.w *= 2;
      this.h *= 2;
      this.y = this.game.canvas.height * 0.84;
    }.bind(this),
    5000
  );
};
Player.prototype.big = function() {
  this.w *= 2;
  this.h *= 2;
  this.y = this.game.canvas.height * 0.8;
  setTimeout(
    function() {
      this.w /= 2;
      this.h /= 2;
      this.y = this.game.canvas.height * 0.84;
    }.bind(this),
    5000
  );
};
Player.prototype.createBullet = function() {
  if (this.shots) {
    this.bullet.push(new Bullet(game, this.x1, this.w, this.y));
    this.shots = false;
    this.temp();
  }
};
Player.prototype.temp = function() {
  setTimeout(
    function() {
      this.shots = true;
    }.bind(this),
    2000
  );
};
Player.prototype.clearBullet = function() {
  this.bullet = this.bullet.filter(
    function(e) {
      return e.y > 0;
    }.bind(this)
  );
};
Player.prototype.collision = function() {
  this.bullet.forEach(function(e) {
    if (
      this.game.bat.x + this.game.bat.w >= e.x &&
      this.game.bat.y <= e.y &&
      this.game.bat.x <= e.x + e.w &&
      this.game.bat.y + this.game.bat.h >= e.y
    )
      this.game.bat.live = false;
  });
};
