function Heart(game, img) {
    this.game = game;

    this.x = this.game.canvas.width * 0.94;
    this.y = this.game.canvas.height * 0.02;
    this.w = this.game.canvas.width * 0.04;
    this.h = this.game.canvas.height * 0.05;

    this.img = img;
    this.live = 3;
}
Heart.prototype.draw = function () {
    var w = 0;
    for(let i = 0; i < this.live; i++){
        this.game.ctx.drawImage(
         this.img,
         this.x - w,
         this.y,
         this.w,
         this.h
     );
    w += this.w;
}
     
}
Heart.prototype.removeheart = function() {
    this.live--;
}
Heart.prototype.addheart = function() {
    this.live++;
}
Heart.prototype.live = function() {
    return this.live;
}