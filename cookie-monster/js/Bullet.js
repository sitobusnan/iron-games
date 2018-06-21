function Bullet(game, x, w, y){

    this.game = game;
    this.x = x + w/4;
    this.y = y;
    this.vy = 4;
    this.w = w;
    this.bullet = new Image();
    this.bullet.src = "img/bullet.png";
}
Bullet.prototype.draw = function() {
    this.game.ctx.drawImage(this.bullet, this.x, this.y, this.w/2, this.game.canvas.height * 0.1);
}
Bullet.prototype.move = function() {
    this.y -= this.vy;
}
