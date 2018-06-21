//Creación del tablero del bomberman, solo será pintado una vez, los obstaculos serán pintados en el momento de colocarlos
function BoardCreator() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = document.getElementById("myCanvas").getContext("2d");
  this.mapSizeX = 15;
  this.mapSizeY = 11;
  this.grass = new Image();
  this.grass.src = "./images/grass.jpg"
  this.wall = new Image();
  this.wall.src = "./images/wall.png"
  this.explosion = new Image();
  this.explosion.src = "./images/fire.gif";
  this.map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ] // 0 libre 1 pared 2 obst 3 bomb 4 pu 5fire
}

BoardCreator.prototype.render = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (var x = 0; x < this.mapSizeY; x++) {
    for (var y = 0; y < this.mapSizeX; y++) {
      if (this.map[x][y] == 0) {
        this.ctx.drawImage(this.grass, y * 64, x * 64, 64, 64);
      }
      if (this.map[x][y] == 1) {
        this.ctx.drawImage(this.wall, y * 64, x * 64, 64, 64);
      }
      if (this.map[x][y] == 5) {
        this.ctx.drawImage(this.explosion, y * 64, x * 64, 64, 64);
      }
    }
  }
}
