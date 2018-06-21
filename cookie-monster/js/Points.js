function Points(game) {

    this.game = game;

    this.x = this.game.canvas.width * 0.02;
    this.y = this.game.canvas.height * 0.05;
    this.point = 0;

    this.img = new Image();
    this.img.src = "img/game.png"
}
Points.prototype.draw = function() {
    this.game.ctx.font = "2em Verdana";
    this.game.ctx.fillStyle = "White";
    this.game.ctx.fillText(this.point, this.x, this.y);
}
Points.prototype.add = function() {

    this.point += 10;
}
Points.prototype.gameOver = function() {
    this.game.ctx.drawImage(this.img, this.game.canvas.width * 0.5 - (this.img.width / 2), this.game.canvas.height * 0.4);
    this.x = this.game.canvas.width * 0.485;
    this.y = this.game.canvas.height / 2;
}
Points.prototype.drawRecord = function() {
    this.game.ctx.font = "2em Verdana";
    this.game.ctx.fillStyle = "Red";
    this.game.ctx.fillText("RECORD", this.game.canvas.width * 0.45, this.game.canvas.height * 0.6    );
}