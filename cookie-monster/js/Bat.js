function Bat(game){
    this.game = game;

    this.x = this.game.canvas.width / 2;
    this.y = this.game.canvas.height * 0.4;
    this.w = this.game.canvas.width * 0.05;
    this.h = this.game.canvas.height * 0.1; 
    this.vx = 5;
    this.live = false;

    this.bat = new Image();
    this.bat.src = "img/victor.png"; 


}
Bat.prototype.draw = function() {
    this.game.ctx.drawImage(this.bat,
    this.x, this.y, this.w, this.h );
}   
Bat.prototype.move = function() {
    this.x += this.vx;
    if (this.x + this.w >= this.game.canvas.width || this.x <= 0)
        this.vx *= -1;
}
Bat.prototype.moveRight = function() {
    this.x += vx;
}
Bat.prototype.moveLeft = function() {
    this.x -= vx;
}