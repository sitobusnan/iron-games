function Board(canvas, ctx, backgroundImage) {
  this.canvas = canvas;
  this.ctx = ctx;

  // board fix properties
  this.ctx.translate(this.canvas.width/2,this.canvas.height*3/4);
  this.ctx.scale(1,-1);
  this.degreeToRad = -Math.PI/180;
  this.backgroundImage = new Image();
  this.backgroundImage.src = backgroundImage;

  // board variable properties
  this.angle = 0;
  this.angleRotation = 0.03;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
  this.imagex = -800;
  this.imageVx = 5;
  this.imagey = -550;
  this.gravity = -0.30;
   //Is it wrong this way?
   //document.dokeydown = this.m1.doKeyDown.bind(this.m1);
}

Board.prototype.drawSkyline = function () {
  //dirty solution to clean all canvas
  this.ctx.clearRect(-800, -800, this.canvas.width+1000, this.canvas.height+1000);
  // I draw three times the background so that Mammoths can go "backwards"
  // this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex - this.backgroundImage.width, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);
  // this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);
  // this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex + this.backgroundImage.width, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);

  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex - this.backgroundImage.width*1.5, this.imagey, this.backgroundImage.width*3, this.backgroundImage.height*3);
  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex, this.imagey, this.backgroundImage.width*3, this.backgroundImage.height*3);
  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex + this.backgroundImage.width*1.5, this.imagey, this.backgroundImage.width*3, this.backgroundImage.height*3);
  // If tha canvas background is going to finish, I change this.imagex to restart the drawing position
  if(this.imagex > -(1850 + this.backgroundImage.width) && this.imagex < this.backgroundImage.width - 1850){
    this.imagex -= this.imageVx;
  }else{
    this.imagex = -850;
  }
  // if(this.imagex > -(450 + this.backgroundImage.width) && this.imagex < this.backgroundImage.width - 450){
  //   this.imagex -= this.imageVx;
  // }else{
  //   this.imagex = -450;
  // }
  // when the background was a simple line...
  // this.ctx.beginPath();
  // this.ctx.moveTo(-500,0);
  // this.ctx.lineTo(500,0);
  // this.ctx.stroke();
};

//move horizon
Board.prototype.moveSkyline = function(){
  if(this.angle > 30){
    this.angleRotation *= -1;
  }else if(this.angle < -20){
    this.angleRotation *= -1;
  }
  this.angle += this.angleRotation*2;
  this.imageVx = this.angle*1.5;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
  // integence to gravity depending on the angle
  this.gravity = -0.30 + (Math.abs(this.angle)*0.003);
};
