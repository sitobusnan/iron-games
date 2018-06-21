window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.getElementById("reload-button").onclick = function(){
    location.reload();
  };

  var game = new Game("canvas");
  var dot = new Dot("canvas");
  var obstacle = new Obstacle("canvas");
  var sound = new Sound();

  document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 38:
          dot.state = "up";
          break;
        case 40:
            dot.state = "down";
          break;
        case 37:
           dot.state = "left";
          break;
        case 39:
           dot.state = "right";
          break;
        case 17:
            dot.state = "stop";
            break;
        default:
      }
    };

  function startGame() {
    var timeCreateNewObstacle = 2 * 1000;

    function obstacleIntervalId() {
      game.addNewObstacle();
      if(game.checkObstacleLength() === true) {
        changeTimer();
      }
    };

    function changeTimer() {
      timeCreateNewObstacle = 1.5 * 1000;
      clearInterval(createObstacles);
      setInterval(obstacleIntervalId, timeCreateNewObstacle)
    }
    var createObstacles = setInterval(obstacleIntervalId, timeCreateNewObstacle)
    var drawIntervalId = setInterval(function() {
      game.drawBackground();
      dot.update();
      game.drawScore();

      if (dot.collide(game.obstacleList)) {
        clearInterval(drawIntervalId);
        sound.play(0);
      }
    }, sec/fps);
  }
};
