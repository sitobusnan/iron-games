Foreground = function (game) {

  
this.game = game;
this.img = new Image();

this.img.src = "images/scene00_front.png";
this.x = 0;
this. y = 0;

}



Foreground.prototype.draw = function (){
this.game.ctx.drawImage(this.img, 618,404);
}

