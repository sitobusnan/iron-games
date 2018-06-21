function Game(id) {
  this.canvas = document.getElementById(id);

  this.canvas.width = window.innerWidth - 20;
  this.canvas.height = window.innerHeight - 20;
  this.ctx = this.canvas.getContext("2d");

  this.img = new IMG(this);
  this.background = new Background(this);
  this.player1 = new Player(this, this.canvas.width * 0.1);
  this.player = new Player(this, this.canvas.width * 0.9);
  this.points = new Points(this);
  this.heart = new Heart(this, this.img.heart);
  this.bat = new Bat(this);
  this.cookies = new Cookies(this);
  this.cookie = [];
  this.pause = false;
  this.cont = 0;
  this.cont2 = 100;
}
Game.prototype.cont22 = function() {
  if (this.points.point > 20) this.cont2 = Math.floor(Math.random() * 75) + 50;
  if (this.points.point > 50) this.cont2 = Math.floor(Math.random() * 50) + 25;
  if (this.points.point > 100) this.cont2 = Math.floor(Math.random() * 25) + 10;
};
Game.prototype.start = function() {
  this.setListeners();
  this.interval = setInterval(
    function() {
      this.clear();
      this.draw();
      this.move();
      this.generateBat();

      if (this.cont++ > this.cont2) {
        this.numRandom();
        this.cont22();
        this.cont = 0;
      }
      this.collision();

      if (this.heart.live <= 0) this.gameOver();
      this.clearArrayCookie();
      this.player.clearBullet();
      this.player1.clearBullet();
    }.bind(this),
    16
  );
};
Game.prototype.generateBat = function() {
  if (this.points.point % 50 === 0 && this.points.point != 0) {
    this.batt();
  }
};
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.player1.draw();
  this.cookie.forEach(function(e) {
    e.draw();
  });
  this.heart.draw();
  this.points.draw();
  if (this.bat.live) this.bat.draw();
};
Game.prototype.move = function() {
  this.cookie.forEach(function(e) {
    e.move();
  });
  this.player.move();
  this.player1.move();
  if (this.bat.live) this.bat.move();
};
Game.prototype.numRandom = function() {
  var random = Math.floor(Math.random() * 100);
  if (random >= 0 && random < 40) {
    this.generateCookie(this.img.cookie, random);
  } else if (random >= 40 && random < 75) {
    this.generateCookie(this.img.carrot, random);
  } else if (random >= 75 && random < 85) {
    this.generateCookie(this.img.broccoli, random);
  } else if (random >= 85 && random < 95) {
    this.generateCookie(this.img.mushrooms, random);
  } else if (random >= 95 && random < 100) {
    this.generateCookie(this.img.heart, random);
  }
};
Game.prototype.generateCookie = function(img, index) {
  this.cookie.push(new Cookie(this, img, index));
};
Game.prototype.clearArrayCookie = function() {
  this.cookie = this.cookie.filter(
    function(e) {
      this.noeat(e.y, e.index);
      return e.y < this.canvas.height * 0.9;
    }.bind(this)
  );
};
Game.prototype.collision = function() {
  this.player.collision();
  var boolean = false;

  this.cookie.forEach(
    function(e) {
      if (this.bat.live) {
        if (
          this.bat.x + this.bat.w >= e.x &&
          this.bat.y <= e.y &&
          this.bat.x <= e.x &&
          this.bat.y + this.bat.h >= e.y
        ) {
          e.img = this.img.ball;
          e.index = 1000;
        }
      }
      if (
        this.player.x1 + this.player.w >= e.x &&
        this.player.y <= e.y &&
        this.player.x1 <= e.x
      ) {
        boolean = true;
        this.eat(e.index, this.player);
        this.cookie.splice(this.cookie.indexOf(e), 1);
        return;
      }
      if (
        this.player1.x1 + this.player.w >= e.x &&
        this.player1.y <= e.y &&
        this.player1.x1 <= e.x
      ) {
        boolean = true;
        this.eat(e.index, this.player1);
        this.cookie.splice(this.cookie.indexOf(e), 1);
        return;
      }
    }.bind(this)
  );

  return boolean;
};
Game.prototype.gameOver = function() {
  clearInterval(this.interval);
  this.clear();
  this.background.draw();
  this.points.gameOver();
  this.points.draw();
  this.cookies.control();
};
Game.prototype.noeat = function(y, index) {
  if (y >= this.canvas.height * 0.9) {
    if (index >= 0 && index < 40) this.heart.removeheart();
  }
};
Game.prototype.eat = function(index, player) {
  player.eats();
  if (index >= 0 && index < 40) {
    this.points.add();
  } else if (index >= 40 && index < 75) {
    this.heart.removeheart();
  } else if (index >= 75 && index < 85) {
    player.small();
  } else if (index >= 85 && index < 95) {
    player.big();
  } else if (index >= 95 && index <= 100) {
    this.heart.addheart();
  } else if (index === 1000) {
    this.heart.removeheart();
    this.heart.removeheart();
  }
};
Game.prototype.setListeners = function() {
  document.onkeydown = function(e) {
    if (e.keyCode === KEY_LEFT) {
      this.player.trueLeft();
    }
    if (e.keyCode === KEY_RIGHT) {
      this.player.trueRight();
    }
    if (e.keyCode === KEY_NUM0) {
      this.player.createBullet();
    }
    if (e.keyCode === KEY_A) {
      this.player1.trueLeft();
    }
    if (e.keyCode === KEY_D) {
      this.player1.trueRight();
    }
    if (e.keyCode === KEY_SPACE) {
      this.player1.createBullet();
    }
    if (e.keyCode === KEY_P) {
      if (!this.pause) this.pause = true;
      else this.pause = false;
      this.stop();
    }
  }.bind(this);
  document.onkeyup = function(e) {
    if (e.keyCode === KEY_LEFT) {
      this.player.falseLeft();
    }
    if (e.keyCode === KEY_RIGHT) {
      this.player.falseRight();
    }
    if (e.keyCode === KEY_A) {
      this.player1.falseLeft();
    }
    if (e.keyCode === KEY_D) {
      this.player1.falseRight();
    }
  }.bind(this);
};
Game.prototype.batt = function() {
  this.bat.live = true;
};
Game.prototype.stop = function() {
  if (this.pause) {
    clearInterval(this.interval);
  } else {
    this.start();
  }
};
var KEY_RIGHT = 39;
var KEY_LEFT = 37;
var KEY_NUM0 = 96;

var KEY_D = 68;
var KEY_A = 65;
var KEY_SPACE = 32;

var KEY_P = 80;
