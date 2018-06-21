function Background() {
  this.speed = -5;
  this.x = 0;
  this.y = 0;
  this.width = 512;
  this.height = 800;
  this.numLoops = 0;
  this.imgBgLevel1 = new Image();
  this.imgBgLevel1.src = 'images/bg-level-800.jpg';
  this.imgScore = new Image();
  this.imgScore.src = 'images/score-board.png';
  this.imgScoreWidth = 150;
  this.imgScoreHeight = 83;
  this.imgReplay = new Image();
  this.imgReplay.src = 'images/replayButton2.png'
  this.imgReplayWidth = 66;
  this.imgReplayHeight = 61;
}

Background.prototype.render = function(){
  if (this.y < -800) { 
    this.y = 0;
    this.numLoops++;
  }
  if (this.y < 0) {
    myGame.ctx.drawImage(this.imgBgLevel1, this.x , this.y + this.height, this.width, this.height); 
  }
  myGame.ctx.drawImage(this.imgBgLevel1, this.x, this.y, this.width, this.height);  
  this.y += this.speed;
}

Background.prototype.renderScore = function(numLifes, score){
  myGame.ctx.drawImage(this.imgScore, 65, 5, this.imgScoreWidth, this.imgScoreHeight);
  myGame.ctx.font = "24px Arial";
  var txtLifes ="Lifes: " + numLifes;
  myGame.ctx.fillText(txtLifes,100,65);
  myGame.ctx.drawImage(this.imgScore, 300, 5, this.imgScoreWidth, this.imgScoreHeight);
  var txtScore ="Score: " + parseInt(score);
  myGame.ctx.fillText(txtScore,315,65);
}

Background.prototype.renderGameOver = function(){
  myGame.ctx.font = "100px Arial";
  myGame.ctx.fillStyle = '#6B3415';
  var txtGame ="GAME";
  myGame.ctx.fillText(txtGame,118,350);
  var txtScore ="OVER";
  myGame.ctx.fillText(txtScore,120,450);
  myGame.ctx.drawImage(this.imgReplay, 200, 550, this.imgReplayWidth*2, this.imgReplayHeight*2);
}

Background.prototype.stop = function() {
  this.speed = 0;
}
