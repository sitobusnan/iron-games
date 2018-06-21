function Game(container, playerName, rounds) {
  this.moleArray = [];
  this.numberOfMoles = 9;
  this.container = container;
  this.html = "";
  this.indexesMole = [];
  this.domMole;
  this.level = 2000;
  this.round = rounds || 30;
  this.roundCounter = 0;
  this.playerName = playerName || "Topito";
  this.ply = new player(this.playerName);
  this.mainSong = new Audio();
  this.mainSong.volume = 0.2;
  this.mainSong.src = "audios/audio_hero_Toys-On-Parade_SIPML_Q-0240.mp3";
  this.moleSongActive = new Audio();
  this.moleSongActive.volume = 0.1;
  this.moleSongActive.src = "audios/candy-crush-bomba-color.mp3";
  this.endGame = new Audio();
  this.endGame.volume = 0.1;
  this.endGame.src = "audios/bites-ta-da-winner.mp3";

  this.start();
}

Game.prototype.generateMoles = function() {
  this.domMole = $("#mole-game");
  for (var i = 0; i < this.numberOfMoles; i++) {
    var mole = new Mole(this, i);
    this.moleArray.push(mole);
  }
};

Game.prototype.start = function() {
  this.mainSong.play();
  $("#nombre-jugador").html("Nombre:  " + this.playerName + " ");
  this.generateMoles();

  this.interval = setInterval(
    function() {
      if (this.roundCounter < this.round) {
        this.resetMole();
        this.getRandomMoles();
        this.roundCounter++;
        console.log(this.roundCounter);
        $("#puntos").text("Puntos: " + this.ply.clickMole);
        $("#vidas").text("Vidas: " + this.ply.live);

        if (this.ply.clickMole === 5) {
          console.log("subes nivel");
          this.level -= 200;
        } else if (this.ply.clickMole === 15) {
          console.log("subes nivel");
          this.level -= 300;
        } else if (this.ply.clickMole === 20) {
          console.log("subes nivel");
          this.level -= 500;
        }
        if (this.ply.live <= 0) {
          this.stop();
          clearInterval(this.interval);
        }
      } else if (this.roundCounter >= this.round) {
        this.stop();
        clearInterval(this.interval);
      }
    }.bind(this),
    this.level
  );
};

Game.prototype.getRandomMoles = function() {
  var numMoles = Math.floor(Math.random() * 2 + 1);
  for (var i = 0; i < numMoles; i++) {
    this.indexesMole.push(
      this.moleArray.indexOf(
        this.moleArray[Math.floor(Math.random() * this.moleArray.length)]
      )
    );
    if (this.indexesMole[0] === this.indexesMole[1]) {
      this.indexesMole.pop();
    } else {
      continue;
    }
  }
  this.showMole(this.indexesMole);
};

Game.prototype.showMole = function() {
  //console.log($('.mole').eq(1))
  this.indexesMole.forEach(
    function(moleIndex) {
      $(".mole")
        .eq(moleIndex)
        .addClass("active");
      this.moleSongActive.play();
    }.bind(this)
  );
  this.indexesMole = [];
};

Game.prototype.resetMole = function() {
  this.ply.live = this.ply.live - $(".mole.active").length;
  $(".mole").removeClass("active");
};
Game.prototype.pushMole = function(mole) {
  mole.addClass("push");
  mole.removeClass("active");
  this.timeOut = setTimeout(
    function() {
      mole.removeClass("push");
    }.bind(this),
    1000
  );
};
Game.prototype.endModal = function() {
  $("#modal-end").modal("show");

  if (this.roundCounter >= this.round) {
    $(".mensaje").append(
      "<p>" +
        this.playerName +
        " " +
        " has ganado " +
        this.ply.clickMole +
        " " +
        "puntos!!!"
    );
  } else {
    $(".mensaje").append(
      "<p>" +
        this.playerName +
        " " +
        "has perdido todas las vidas.</p> <p> has ganado " +
        this.ply.clickMole +
        " " +
        "puntos"
    );
  }
  $("#jugar-dn").click(
    function() {
      $("#start-game").show();
    }.bind(this)
  );
};
Game.prototype.stop = function() {
  this.mainSong.pause();
  this.endGame.play();
  this.endModal();
  this.resetMole();
};
