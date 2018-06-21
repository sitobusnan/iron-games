function BadBird(speed, x, y, i){
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.imgBadBird = new Image();
  this.indexImgArr = i;
  this.imgArr = [{src: 'images/badBird.png', scale: 187/100, resize: 50}];
  this.imgBadBird.src = this.imgArr[i].src;
  this.imgScale = this.imgArr[i].scale;
  this.width = this.imgArr[i].resize*this.imgScale;
  this.height = this.imgArr[i].resize;
  this.directionR = true;
}

BadBird.prototype.move = function() {
  if(this.directionR) this.moveR();
  else this.moveL();
}

BadBird.prototype.moveD = function() {
  if (this.y >= 800) this.y = 0;
  this.y += this.speed/1000*myGame.delta;
}

BadBird.prototype.moveR = function(){
  this.moveD();
  if (this.canMoveR())this.x += this.speed/1000*myGame.delta;
  else this.directionR = false;
}

BadBird.prototype.moveL = function(){
  this.moveD();
  if (this.canMoveL())this.x -= this.speed/1000*myGame.delta;
  else this.directionR = true;
}

BadBird.prototype.canMoveR = function(){  
  return (this.x >= 385) ? false : true;
}

BadBird.prototype.canMoveL = function(){  
  return (this.x <= 60) ? false : true;
}

BadBird.prototype.render = function(){
  this.move();
  myGame.ctx.drawImage(this.imgBadBird, this.x, this.y, this.width , this.height);
}