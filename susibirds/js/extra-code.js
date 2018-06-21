var myGame = new Game;
myGame.startGame();

function restartGame() {
  myGame = new Game;
}

function CheckCollision() {
  for (var i = 0; i < myGame.arrRockets.length; i ++) {
    if ((myGame.arrRockets[i].posX < myGame.susiBird1.posX + myGame.susiBird1.width && myGame.arrRockets[i].posX + myGame.arrRockets[i].width  > myGame.susiBird1.posX && myGame.arrRockets[i].posY < myGame.susiBird1.posY + myGame.susiBird1.height && myGame.arrRockets[i].posY + myGame.arrRockets[i].height > myGame.susiBird1.posY) || (myGame.badGuy.x < myGame.susiBird1.posX + myGame.susiBird1.width-50 && myGame.badGuy.x +  myGame.badGuy.width-25  > myGame.susiBird1.posX && myGame.badGuy.y < myGame.susiBird1.posY + myGame.susiBird1.height-80 && myGame.badGuy.y + myGame.badGuy.height-30 > myGame.susiBird1.posY)) {

      myGame.susiBird1.collision();
      myGame.isGameRunning = false;

    } else {
      myGame.susiBird1.render();
      myGame.arrRockets[i].render();
      myGame.badGuy.render();
     }
  }
}

function resume() {
  // myGame.isGameRunning = true;
  // stopAnimationFrame(x);
  // stopAnimationFrame(y);
  //render();
  myGame.susiBird1.render();  
  myGame.arrRockets.forEach(render);
  myGame.badGuy.render();
}

function birdDies() {
  myGame.ctx.clearRect(0,0,myGame.cv.width,myGame.cv.height);
  myGame.background1.render();
  myGame.background1.renderScore(myGame.susiBird1.lifes,myGame.score);
}

function update(){
  myGame.then = myGame.now;
  myGame.now = Date.now();
  myGame.delta = myGame.now - myGame.then;
  
  myGame.ctx.clearRect(0,0,myGame.cv.width,myGame.cv.height);
  myGame.background1.render();
  myGame.score++;
  myGame.background1.renderScore(myGame.susiBird1.lifes,myGame.score);

  CheckCollision();
}

var render = function(){
  if(myGame.isGameRunning==true){
    update();
  }
  else if(myGame.isGameRunning==false){
    setTimeout(birdDies,1000);
    setTimeout(resume,1000);
  }
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);

window.addEventListener('keydown', function(e){
  switch(e.keyCode){
      case 37: // left
        myGame.susiBird1.moveX(-1);        
      break;

      case 38: // up
        myGame.susiBird1.moveY(-1);        
      break;

      case 39: // right
        myGame.susiBird1.moveX(1);
      break;

      case 40: // down
        myGame.susiBird1.moveY(1);
      break;
  }
});

window.addEventListener('keyup', function(e){
  myGame.susiBird1.stop();
});


Game.prototype.createBadGuys = function(numberOfBadGuys){
  for (var i = 0; i < numberOfBadGuys; i++) {
    var x,y,z;
    if (i % 2 === 0) {x = -200;} else {x = -250;}
    y = (Math.floor(Math.random()*5)*75)+100;
    z = (Math.floor(Math.random()*3)*300)+800;
    var badGuy = new BadBird(100,y,z,0)
    this.arrBadGuys.push(badGuy);
  }
}