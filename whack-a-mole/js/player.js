function player(name) {
  this.clickMole = 0;
  this.live = 3;
}
player.prototype.matchMole = function(mole) {
  console.log("matchmole");
};
