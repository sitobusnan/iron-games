function Sound(){
  this.sound = [
    'parecia-que-si.mp3',
  ];
}

Sound.prototype.play = function(track){
  new Audio("./sound/" + this.sound[track]).play();
};
