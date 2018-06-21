function FlyingBird(speed,x,y){
  this.speed = speed;
  this.posX = x;
  this.posY = y;
  this.imgs = [new Image(),new Image(),new Image(),new Image()];
  this.imgs[0].src = 'images/susiBird.png';
  this.imgs[1].src = 'images/susiBird2Balloons.png';
  this.imgs[2].src = 'images/susiBird1Balloon.png';
  this.imgs[3].src = 'images/susiBird0Balloons.png';
  this.img = this.imgs[0];
  this.imgsScales = [100/161, 1];
  this.imgsResize = [110,110];
  this.width = this.imgsScales[0]*this.imgsResize[0];
  this.height = this.imgsResize[0];
  this.direction = [false,false,false,false];
  this.lifes = 3;  
  this.counterImg = 0;
}

FlyingBird.prototype.moveLeft = function(){
  if(this.canMoveLeft()) this.posX -= this.speed;
}
FlyingBird.prototype.moveRight = function(){
  if(this.canMoveRight()) this.posX += this.speed;
}
FlyingBird.prototype.moveUp = function(){
  if(this.canMoveUp()) this.posY -= this.speed;
}
FlyingBird.prototype.moveDown = function(){
  if(this.canMoveDown()) this.posY += this.speed;
}
FlyingBird.prototype.canMoveLeft = function(){
 return (this.posX <= 60) ? false : true;
}
FlyingBird.prototype.canMoveRight = function(){
  return (this.posX >= 385) ? false : true;
}
FlyingBird.prototype.canMoveUp = function(){
  return (this.posY <= 90) ? false : true;
}
FlyingBird.prototype.canMoveDown = function(){
  return (this.posY >= 690) ? false : true;
}

FlyingBird.prototype.move = function(){
  if(this.direction[0])this.moveLeft();
  if(this.direction[1])this.moveRight();
  if(this.direction[2])this.moveUp();
  if(this.direction[3])this.moveDown();
}

FlyingBird.prototype.render = function(){
  this.move();
  myGame.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
}
