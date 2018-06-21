var Cookie = function(game, img, index) {
  this.game = game;

  this.w = this.game.canvas.width * 0.02;
  this.x = Math.floor(
    Math.random() * (this.game.canvas.width - this.w)
  );
  this.y = 0;
  this.h = this.game.canvas.height * 0.03;

  this.vy = 2;  
  this.batLive();

  this.img = img;
  this.index = index;
};
Cookie.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}
Cookie.prototype.move = function() {
    this.y += this.vy;
}
Cookie.prototype.batLive = function() {
    
        if (this.game.points.point > 20)
          this.vy = Math.floor(Math.random() * 4) + 2;
        if (this.game.points.point > 30) {
          this.vy = Math.floor(Math.random() * 6) + 3;
        }
      
}