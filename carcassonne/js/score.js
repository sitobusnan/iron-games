function Score() {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.turnPlayerOne = false;
}

Score.prototype.addPlayerOneScore = function() {
  this.playerOneScore++;

  $(".player-1 .player-score").text(this.playerOneScore);
};

Score.prototype.addPlayerTwoScore = function() {
  this.playerTwoScore++;

  $(".player-2 .player-score").text(this.playerTwoScore);
};

Score.prototype.changeTurn = function() {
  if (this.turnPlayerOne) {
    this.turnPlayerOne = false;
    $(".player-2").addClass("active");
    $(".player-1").removeClass("active");
  } else {
    this.turnPlayerOne = true;
    $(".player-1").addClass("active");
    $(".player-2").removeClass("active");
  }
};

Score.prototype.scoreAcordingToTurn = function() {
  if (this.turnPlayerOne) {
    this.addPlayerOneScore();
  } else {
    this.addPlayerTwoScore();
  }
};

Score.prototype.finishGame = function() {
  if ($("#deck").children().length === 0) {
    $(".player").removeClass("active");

    var playBtn = '<div id="refresh" class="capa1 play-btn"><div class="capa2"><div class="capa23"><div class="capa3"><div class="capa4"><span class="text rotate">Play again</span><div class="capa5"></div></div></div></div></div></div>';
    $("body").prepend("<div id='end-game' class='game-screen'></div>");
    $("#end-game").append("<h2>And the winner is...</h2><div class='winner'></div>" + playBtn);
    $('#refresh').click(function() {
      location.reload();
    });

    if (this.playerOneScore > this.playerTwoScore) {
      console.log("Player 1 wins");
      $(".winner").text("Player 1");
    } else if (this.playerOneScore < this.playerTwoScore) {
      console.log("Player 2 wins");
      $(".winner").text("Player 2");
    } else {
      console.log("It's a tie");
      $(".winner").text("Ops! It's a tie, you should play again");
    }
  }
};
