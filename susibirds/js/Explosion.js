function Explosion(){
  this.imgExpl = new Image();
  this.imgExpl.src = 'images/explosion01.png';
  this.imgScale = 1;
  this.imgResize = 120;
  this.width = this.imgScale*this.imgResize;
  this.height = this.imgResize;
}

Explosion.prototype.renderExplosion = function (x,y) {
  myGame.ctx.drawImage(this.imgExpl, x-this.width/2+10, y-this.height/2+10, this.width, this.height);
}