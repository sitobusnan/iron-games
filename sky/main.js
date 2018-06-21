$(document).ready(() => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  var fps = 60;
  var board = new Board(canvas, ctx);
  var skier = new Skier(canvas, ctx);
  var ejercito = [];
  var redbull = [];
  var stelar = [];
  var stelarDos = [];
  //var obstacle = new Obstacle(canvas, ctx);
  //var obstacleDos = new Obstacle(canvas, ctx);

  function play(){
    var audio = document.getElementById("audio");
    audio.play();
  }

  function createStelar(skier){
    stelar.push({x:skier.x, y:skier.y})
    if(stelar.length > 100){
      stelar.splice(0,1)
    } stelarDos.push({x:skier.x, y:skier.y})
    if(stelarDos.length > 100){
      stelarDos.splice(0,1)
  }
}


  function numberObstacle(a) {
    var number;
    if(skier.score <= 25){ number = Math.ceil((skier.score+4)/5) }
    if(skier.score > 25 && skier.score <= 100){ number = Math.ceil((skier.score+9)/7) }
    if(skier.score > 100 && skier.score <= 200){ number = Math.ceil((skier.score+10)/9) }
    if (skier.score > 200){ number = 23}
    //console.log(ejercito.length)
    return number;
  }

  function createObstacle(a){
    while (a.length < numberObstacle()) {a.push(new Obstacle(canvas, ctx))}
  }

  function createProtection(a) {
  if (skier.score <= 150) {
    while (a.length < 1) {
      a.push(new Power(canvas, ctx));
    }
  } else if (skier.score > 150){
    while (a.length < 4) {
      a.push(new Power(canvas, ctx));
    } 
  }
};

  function update_game() {
    board.draw();
    skier.update();
    skier.draw();
    //skier.drawTrack(skier);
    skier.drawLife();
    skier.drawScore();
    skier.drawHealthBar();
    move();
    createObstacle(ejercito);
    createStelar(skier)
    //console.log(stelar)
    stelar.forEach(function(e){
      skier.drawTrack(e)
    })
    stelarDos.forEach(function(e){
      skier.drawTrackDos(e)
    })
    ejercito.forEach(function(e, i) {
      e.draw();
      e.update();
      e.collisionTop();
      skier.hitObstacle(e);
      stopGame(skier, e);
      if (e.isAlive == false) {
        skier.score += 1;
        ejercito.splice(i, 1);
      }
      if (skier.score > 50 && skier.score <= 100){
        e.vy = -7.5;
      } if (skier.score > 100 && skier.score <= 150){
        e.vy = -8;
      } if (skier.score > 150 && skier.score <= 200){
        e.vy = -8.5;
      } if (skier.score > 200 && skier.score <= 250){
        e.vy = -9;
      } if (skier.score > 250 && skier.score <= 300){
        e.vy = -9.5;
      } if (skier.score > 300){
        e.vy = -10;
      }
    });
    createProtection(redbull);
    redbull.forEach(function(e, i) {
      e.draw();
      e.update();
      e.collisionTop();
      skier.hitPower(e);
      if (e.isAlive == false) {
        redbull.splice(i, 1);
      }
    });
  };

  document.onkeydown = function(e) {
    //console.log("DOWN");
    if (e.keyCode == 68) {
      skier.direction[0] = true;
    } else if (e.keyCode == 65) {
      skier.direction[1] = true;
    } else if (e.keyCode == 32) {
      startgame();
      play();
    }
  };

  document.onkeyup = function(e) {
    //console.log("UP");
    if (e.keyCode == 68) {
      skier.direction[0] = false;
    } else if (e.keyCode == 65) {
      skier.direction[1] = false;
    }
  };

  function move() {
    if (skier.direction[0] == true) {
      //console.log("RIGHT")
      skier.moveRight();
    } else if (skier.direction[1] == true) {
      //console.log("LEFT")
      skier.moveLeft();
    }

    (function() {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();
  }

  function animate() {
    update_game();
    requestAnimationFrame(animate);
  }

  function startgame() {
    requestAnimationFrame(animate);
  }

});

function stopGame(s, e) {
  var cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  if (s.life <= -1) {
    if (s.hitObstacle(e) == true) {
      s.life = 0;
      s.theEnd();
      cancelAnimationFrame(animate);
    }
  }
};

