function Sound() {
}

Sound.prototype.playClickSound = function() {
  var sound = new Audio("sound/click2.wav");
  sound.play();
  sound.onerror = function(){
    console.log("Sound file "+src+" failed to load.");
  };
};
