

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    $("#name").text(nameInput);
    event.preventDefault();

  var score;
  $("form#vacaySuggestion").submit(function() {
    event.preventDefault();



    var preference = parseInt($("#preference").val());
    var activity = parseInt($("input:radio[name=activity]:checked").val());
    var meal = parseInt($("#meal").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());

    var score = preference + activity + meal + vacation


    $(".salutation").show();
    $("#output").show();

    var snakeIsland = 0;
    var alnwickPoisonGardens = 0;
    var yungasRoad = 0;
    var home = 0;


    if (score <= 4){
      score = $("#snakeIsland").show();
} else if (score > 4 && score < 8){
      score = $("#alnwickPoisonGardens").show();
} else if (score >= 9 && score < 12){
      score = $("#yungasRoad").show();
} else if (score >= 12 && score < 16){
      score = $("#home").show();
      }

  });
});
