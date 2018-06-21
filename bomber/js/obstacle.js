//Obstaculos que se romperan con las bombas que ponga bomberman.

function ObstacleCreator() {
    this.position = [];
    this.width = 64;
    this.height = 64;
    this.powerUp = 3;
    this.box = new Image();
    this.box.src = "./images/box.png"
    this.powerup = new Image();
    this.powerup.src = "./images/power-up.jpg"
}

ObstacleCreator.prototype.createObs = function (board, num) {
    var t = 0;
    var tempX, tempY;
    while (t < num) {
        tempX = this.rand(board.mapSizeX);
        tempY = this.rand(board.mapSizeY);
        if (board.map[tempY][tempX] != 1) {
            if (!((tempX == 1 && tempY == 1) || (tempX == 2 && tempY == 1) || (tempX == 1 && tempY == 2)
                || (tempX == 13 && tempY == 9) || (tempX == 13 && tempY == 8) || (tempX == 12 && tempY == 9))) {
                board.map[tempY][tempX] = 2;
                this.position.push({ tempX, tempY });
                t++;
            }
        }
    }
    console.log(newObs)
}

ObstacleCreator.prototype.rand = function (max) {
    return Math.floor(Math.random() * max);
}

ObstacleCreator.prototype.render = function (board) {
    for (var x = 0; x < board.mapSizeY; x++) {
        for (var y = 0; y < board.mapSizeX; y++) {
            if (board.map[x][y] == 2) {
                board.ctx.drawImage(this.box,y * 64, x * 64, 64, 64);
            }
            if (board.map[x][y] == 4){
                board.ctx.drawImage(this.powerup,(y * 64), (x * 64), 64, 64);
            }
        }
    }
}


