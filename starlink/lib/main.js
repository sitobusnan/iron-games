var game;
window.onload = function() {

  // set z-indexes
  document.getElementById("welcome").style.zIndex = "-1";
  document.getElementById("fade").style.zIndex = "2";
  document.getElementById("start-landing").style.zIndex = "3";
  document.getElementById("user-input").style.zIndex = "3";
  document.getElementById("mute-container").style.zIndex = "4";
  document.getElementById("instructions").style.zIndex = "5";

  // landing page click event --> redirects to username input
  var startGame = document.getElementById("start-new-game");
  startGame.onclick = function() {
    $("#start-landing").addClass("fadeOut");
    $("#scoreboard").removeClass("hidden");
    setTimeout(function() {
      $("#user-input").removeClass("hidden");
    }, 1950);
    setTimeout(function() {
      $("#user-input").addClass("fadeIn");
    }, 1950);
    setTimeout(function() {
      $("#start-landing").addClass("hidden");
    }, 1950);
  };

  // username input click event --> instruction video
  var submit = document.getElementById("submit");
  submit.onclick = function() {
    $("#user-input").addClass("fadeOut");
    $("#username").focus();
    var name = $("#txt_name").val();
    $('.welcome-name').html(name);
    $("#fade").addClass("fadeOut");
    setTimeout(function() {
      $("#fade").addClass("hidden");
    }, 2000);
    setTimeout(function() {
      $("#instructions").removeClass("hidden");
    }, 1000);
    setTimeout(function() {
      $("#instructions").addClass("fadeIn");
    }, 1000);
    setTimeout(function() {
      $("#user-input").addClass("hidden");
    }, 1950);
  };

  // instruction video --> start game
  var instructions = document.getElementById("after-instruction");
  instructions.onclick = function() {
    $("#instructions").addClass("fadeOut");
    setTimeout(function() {
      $("#welcome").removeClass("hidden");
    }, 1000);
    setTimeout(function() {
      $("#welcome").addClass("fadeIn");
    }, 1000);
    setTimeout(function() {
      $("#instructions").addClass("hidden");
    }, 1950);
    setTimeout(function() {
      game = new Game("canvas", 500);
    }, 2500);
  };

  // game over button click event, starts new game
  var newGame = document.getElementById("new-game");
  newGame.onclick = function() {
    $("#game-over").addClass("fadeOut");
    $("#game-over").removeClass("fadeIn");
    setTimeout(function() {
      $("#game-over").addClass("hidden");
    }, 1950);
    setTimeout(function() {
      game.reset();
    }, 4000);
  };

  // mute sounds
  var mute = document.getElementById("mute-container");
  var audio = document.getElementById("audio");
  mute.onclick = function(e) {
    var isMuted = false;
    console.log("click");
    $("#mute-sound").toggleClass("hidden");
    $("#play-sound").toggleClass("hidden");
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
  };
};
