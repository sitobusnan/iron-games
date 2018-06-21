var card = new Card();
var score = new Score();
var board = new Board();

$( document ).ready(function() {
  $("#start").click(function() {
    $("#begin-game").hide("fast");
    $(".score").addClass("show");
  });

  board.createCells();
  board.initialCell();
  card.createDeck();
  card.selectCard();
  board.acceptCard();
  card.drag();
  score.changeTurn();
});
