function Background(game) {
    this.game = game;
    this.background = new Image();
    this.background.src = "img/fondoj.png";
    
    this.backgroundI = new Image();
    this.backgroundI.src = "img/fondo.png";

}
Background.prototype.draw = function(){
    this.game.ctx.drawImage(
        this.background,
        0,
        0,
        this.game.canvas.width,
        this.game.canvas.height
    );
}