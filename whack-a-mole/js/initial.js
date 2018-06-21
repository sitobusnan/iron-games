$(document).ready(function() {
  $("#start-game").on("click", function() {
    var name = $("#formGroupExampleInput").val();
    var rounds = $("#formGroupExampleInput2").val();
    $("#go-to-game").attr(
      "href",
      "game.html?name=" + name + "&rounds=" + rounds
    );
  });
});
