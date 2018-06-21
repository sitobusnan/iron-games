function Score(game) {
  this.game = game;

  this.points = 0;
}

//-------------SCORE DRAW----------------

Score.prototype.draw = function() {
  this.game.ctx.font = "70px 'Press Start 2P'";
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillText(
    "Score:" + Math.floor(this.points),
    this.game.canvas.width * 0.25,
    this.game.canvas.height * 0.05
  );
  this.game.ctx.textBaseline = "top";
};
