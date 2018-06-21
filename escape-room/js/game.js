function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
  this.height = 563;
  this.offsetX = parseInt(this.canvas.offsetLeft);
  this.offsetY = parseInt(this.canvas.offsetTop);
  this.frameCounter = 0;
  this.currentScene = 0
  this.previousScene = 0;
  this.foregroundElements = true;

  this.reset();
  this.start();
}


Game.prototype.reset = function () {
  this.background = new Background(this);
  this.foreground = new Foreground(this);
  this.actions = new Actions(this);
  this.items = new Items(this);
  this.hero = new Hero(this);
  this.zones = new Zones(this);
  this.setListener();

};



Game.prototype.start = function () {
// Interval that refreshes the canvas and makes the hero move.

  var interval = setInterval(function () {
    this.clear();
    this.draw();

    if (this.hero.walking == true) {
        this.hero.move();
    }
    
    if (this.frameCounter <= this.hero.img.frames - 2) {
      this.frameCounter++;
    }
    else {
      this.frameCounter = 0;
    }
  }.bind(this), 100)

}

/**
* CLICK LISTENER
* When a click happens, coordinates are
* sent to zones.checkhit(x,y) to match them
* with active clickable areas in (zoneList[]).
*/

Game.prototype.setListener = function () {
  this.canvas.addEventListener('click', function (event) {
    this.zones.checkHit(event.clientX, event.clientY);
  }.bind(this))
}


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  this.zones.renderAll();
  this.background.draw();
  this.hero.draw();
  if (this.foregroundElements === true) {
    this.hero.draw();
    this.foreground.draw();
  }
}