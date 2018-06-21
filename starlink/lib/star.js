// star constructor
function Star(x,y,r) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.x = x;
  this.y = y;
  this.r = r;
  this.sAngle = 0;
  this.eAngle = 2*Math.PI;
  this.direction = true;
}

// draws the stars
Star.prototype.draw = function() {
  var transparancy = 1;
  this.ctx.globalCompositeOperation = 'source-over';
  this.ctx.fillStyle = "rgba(255,255,255,"+transparancy+")";
  this.ctx.shadowColor = "#FFFD86";
  this.ctx.shadowBlur = 40;
  this.ctx.beginPath();
  this.ctx.arc(this.x,this.y,this.r,this.sAngle,this.eAngle,this.direction);
  this.ctx.fill();
  this.ctx.closePath();
};
