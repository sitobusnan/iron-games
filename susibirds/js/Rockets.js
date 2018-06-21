function Rocket(speedY,x,y){
  this.posX = x;
  this.posY = y;
  this.speedY = speedY;
  this.imgRocket = new Image();
  this.imgRocket.src = 'images/rocket.png';
  this.imgScale = 75/178;
  this.resize = 50;
  this.width = this.resize * this.imgScale;
  this.height = this.resize ;
  this.alive = true;
}

Rocket.prototype.stop = function(){
  this.speedY = 0;
}

Rocket.prototype.collision = function(arr){
  this.stop();
  this.alive = false;
  for (var i = 0 ; i < arr.length; i++) {
    arr[i].stop();
  }
}

Rocket.prototype.renderRocket = function(){
  this.posY += this.speedY/1000*myGame.delta;
  if (this.posY < -100) {
  this.posY = 800;
  } 
  myGame.ctx.drawImage(this.imgRocket, this.posX, this.posY, this.width, this.height);
}