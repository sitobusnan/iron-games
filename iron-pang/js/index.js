window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.font = "80px 'Press Start 2P'";
  ctx.strokeStyle = "Black";
  ctx.fillText("IRON PANG", canvas.width * 0.25, canvas.height * 0.4);

  ctx.font = "60px 'Press Start 2P'";
  ctx.strokeStyle = "Black";
  ctx.fillText("-START-(Press P)", canvas.width * 0.15, canvas.height * 0.55);

  ctx.font = "40px 'Press Start 2P'";
  ctx.strokeStyle = "Black";
  ctx.fillText(
    "move: arrows, shoot: spacebar",
    canvas.width * 0.1,
    canvas.height * 0.65
  );

  ctx.font = "30px 'Press Start 2P'";
  ctx.strokeStyle = "Black";
  ctx.fillText("(Insert Coin)", canvas.width * 0.38, canvas.height * 0.75);

  document.onkeydown = function(event) {
    if (event.keyCode === 80) {
      var game = new Game("canvas");
      game.start();
    }
  };
};
