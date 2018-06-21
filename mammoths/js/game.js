function Game(canvas, gameTime){
  this.canvas = document.getElementById(canvas);
  this.gameTime = gameTime;
  this.ctx = this.canvas.getContext('2d');
  this.ctx.canvas.width  = window.innerWidth;
  this.ctx.canvas.height = window.innerHeight;

  this.listOfMammoth = [];
  // I add mammoths and the board to the game
  this.board = new Board(this.canvas, this.ctx, "images/background3.png");
  this.mammoth6 = new Mammoth(this.canvas, this.ctx, "Mammoth 6", 70, 200, 32, "images/Mammoth6.png");
  this.mammoth10 = new Mammoth(this.canvas, this.ctx, "Mammoth 10", 80, 100, 38, "images/Mammoth10.png");
  this.listOfMammoth.push(this.mammoth6);
  this.listOfMammoth.push(this.mammoth10);

  // wanna add more mammoths???
  // -----------------  Four mammoths ----------------
  this.mammoth23 = new Mammoth(this.canvas, this.ctx, "Mammoth 23", 90, -100, 13, "images/Mammoth23.png");
  this.mammoth69 = new Mammoth(this.canvas, this.ctx, "Mammoth 69", 100, -250, 16, "images/Mammoth69.png");
  this.listOfMammoth.push(this.mammoth23);
  this.listOfMammoth.push(this.mammoth69);

  // all mammoths should be in the array of mammoths
  this.firstMammoth = this.listOfMammoth[0];
}

Game.prototype.checkFirstPosition = function () {
  this.listOfMammoth.sort(function(a, b) {
  return b.x - a.x;
  });
  document.getElementById("firstMammoth").src=this.listOfMammoth[0].img.src;
  game.listOfMammoth[0].timeFirstPosition++;
  //onsole.log(game.listOfMammoth[0].name + "is first");

  this.listOfMammoth.sort(function(a, b) {
  return b.timeFirstPosition - a.timeFirstPosition;
  });
  //console.log(game.listOfMammoth[0].name + " is winning with a sum of " + game.listOfMammoth[0].timeFirstPosition/(60*game.listOfMammoth.length) + "seconds");
  //document.getElementById("classificationList").style.listStyle = "initial";
  document.getElementById("1st").innerHTML = game.listOfMammoth[0].name + "  (" + game.listOfMammoth[0].timeFirstPosition +"ms)";
  document.getElementById("2nd").innerHTML = game.listOfMammoth[1].name + "  (" + game.listOfMammoth[1].timeFirstPosition +"ms)";
  // -----------------  Four mammoths ----------------
  document.getElementById("3rd").innerHTML = game.listOfMammoth[2].name + "  (" + game.listOfMammoth[2].timeFirstPosition +"ms)";
  document.getElementById("4th").innerHTML = game.listOfMammoth[3].name + "  (" + game.listOfMammoth[3].timeFirstPosition +"ms)";

  document.getElementById("gameTime").innerHTML = "Game time: " + Math.round(game.gameTime/1000);
};


Game.prototype.checkWinner = function(){
    //window.alert("The Winner is: " + game.listOfMammoth[0].name + " !!");
    document.getElementById("winnerImg").src=this.listOfMammoth[0].img.src;
    document.getElementById("winnerDiv").style.display = "block";
};

// we can use only one function for first position
// Game.prototype.firstMammoth = function (){
//   this.listOfMammoth.sort(function(a, b) {
//   return b.timeFirstPosition - a.timeFirstPosition;
//   });
//   console.log(game.listOfMammoth[0].name + " is winning with a sum of " + game.listOfMammoth[0].timeFirstPosition/(60*game.listOfMammoth.length) + "seconds");
// };

// new game
var game = new Game("canvas",60000);

// document.getElementById('playButton').onClick = function(){
//   alert("Hola");
//};

// WARNING: If I click many times ... I have many Set intervals
function play(){
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.display = "none";
    var addCanvas = document.getElementById("canvas");
    addCanvas.style.display = "block";
    // why this does not work?
    //document.getElementById("canvas").addClass("canvasDesign");
    var intervalId = window.setInterval(function(){

      // lets draw the board and move it
      game.board.drawSkyline();
      game.board.moveSkyline();

      // Lets draw the mammmoths
      game.mammoth6.drawMammoth();
      this.addEventListener("keydown",game.mammoth6.doKeyDown.bind(game.mammoth6),true);
      game.mammoth10.drawMammoth();
      this.addEventListener("keydown",game.mammoth10.doKeyDown.bind(game.mammoth10),true);
      // -----------------  Four mammoths ----------------
      game.mammoth23.drawMammoth();
      this.addEventListener("keydown",game.mammoth23.doKeyDown.bind(game.mammoth23),true);
      game.mammoth69.drawMammoth();
      this.addEventListener("keydown",game.mammoth69.doKeyDown.bind(game.mammoth69),true);

      game.gameTime -= 1000/60;
      game.checkFirstPosition();

    }, 1000/45);

    setTimeout(function(){
      window.clearInterval(intervalId);
      game.checkWinner();
    }, game.gameTime);

}
