function Text (message, size, x, y) {
this.canvas = document.getElementById("canvas");
this.ctx = this.canvas.getContext("2d");
this.fontStyle = "Heebo";
this.x = x;
this.y = y;
this.message = message;
this.size = size;
}

Text.prototype.drawText1sec = function() {
  this.ctx.save();
  this.ctx.font = "100 "+ this.size +" "+ this.fontStyle;
  this.ctx.fillText(this.message,this.x,this.y);
  this.ctx.restore();
};
