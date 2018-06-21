function Game(){
  this.cv = document.getElementById('canvas');
  this.ctx = this.cv.getContext('2d');
  this.fps = 60;
  this.now = Date.now();    
  this.then = 0;
  this.delta = 0;
  this.score = 0;
  this.level = 1;
  this.background1;
  this.arrRockets = [];
  this.badGuy;
  this.badGuy2;
  this.arrBadGuys = [];
  this.numberOfRockets = 8;
  this.numberOfBadGuys = 2;
  this.susiBird1;
  this.arrExpl = [];

  this.gameAudio = new Audio();
  this.gameAudio.src = 'audio/wind.mp3';
  this.gameAudio.loop = true;
  this.rocketsAudio = new Audio();
  this.rocketsAudio.src = 'audio/tracer.wav';
  this.explosionAudio = new Audio();
  this.explosionAudio.src = 'audio/explosion.wav';
}

Game.prototype.startGame = function() {
  this.background1 = new Background();
  this.susiBird1 = new FlyingBird(10,250,250,0);
  this.createArrRockets(this.numberOfRockets);
  this.badGuy = new BadBird(100,80,-432,0);
  this.badGuy2 = new BadBird(100,400,0,0);
  this.arrBadGuys.push(this.badGuy);
  this.arrBadGuys.push(this.badGuy2);
  this.gameAudio.play();
}

Game.prototype.createArrRockets = function(numRockets){
  for (var i = 0; i < numRockets; i++) {
    var x,y,z;
    if (i % 2 === 0) {x = -200;} else {x = -250;}
    y = (Math.floor(Math.random()*5)*75)+100;
    z = (Math.floor(Math.random()*3)*300)+800;
    var rocket = new Rocket(x,y,z)
    this.arrRockets.push(rocket);
  }
}

Game.prototype.createSusiBird = function() {
  this.susiBird2 = new FlyingBird(50,250,250,0);
}

Game.prototype.checkCollision = function () {
  if (myGame.susiBird1.lifes <= 0) {
    this.susiBird1.img = this.susiBird1.imgs[3];
    this.susiBird1.moveDown();
    setTimeout(myGame.background1.renderGameOver(),4000);
  } else {
    for (var i = 0; i < myGame.arrRockets.length; i++) {
      if (this.arrRockets[i].posX < this.susiBird1.posX + this.susiBird1.width &&
        this.arrRockets[i].posX + this.arrRockets[i].width > this.susiBird1.posX &&
        this.arrRockets[i].posY < this.susiBird1.posY + this.susiBird1.height &&
        this.arrRockets[i].posY + this.arrRockets[i].height > this.susiBird1.posY) {

          this.rocketsAudio.play();
          this.arrRockets[i].posY = -80;
          this.score++;
      } 
    }
    for (var i = 0; i < myGame.arrBadGuys.length; i++) {
      if (this.arrBadGuys[i].x < this.susiBird1.posX + this.susiBird1.width &&
        this.arrBadGuys[i].x + this.arrBadGuys[i].width > this.susiBird1.posX &&
        this.arrBadGuys[i].y < this.susiBird1.posY + this.susiBird1.height &&
        this.arrBadGuys[i].y + this.arrBadGuys[i].height > this.susiBird1.posY) {

          this.explosionAudio.play();

          this.createExplosion(this.arrBadGuys[i].x ,this.arrBadGuys[i].y, 5000);
          this.susiBird1.lifes--;
          switch (this.susiBird1.lifes) {
            case 2:
            this.susiBird1.img = this.susiBird1.imgs[1];
            break;
            case 1:
            this.susiBird1.img = this.susiBird1.imgs[2];
            break;
            default:
            this.susiBird1.img = this.susiBird1.imgs[0];
            break;
          }
          this.arrBadGuys[i].y = -50;
      }
    } 
  }
}

Game.prototype.createExplosion = function(x,y,time) {
  var tempExpl = new Explosion();
  this.arrExpl.push(tempExpl);
  tempExpl.renderExplosion(x,y);
  setTimeout(function(){
    if(this.arrExpl)this.arrExpl.pop()
  },time);
}