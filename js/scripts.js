$(document).ready(function() {
  $("form").submit(function(event) {
    var score = 0;
    var result = parseInt($("#preference").val());
    score += result;
    result = parseInt($("#meal").val());
    score += result;
    result = parseInt($("input:radio[name=vacation]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=activity]:checked").val());
    score += result;

    if (score === 4){
      $("#snakeIsland").slideDown();
}
    if (score > 4 && score < 8){
      $("#yungasRoad").slideDown();
}
    if (score > 7 && score < 13){
      $("#alnwickPoisonGardens").slideDown();
}
    if (score > 12 && score < 17){
      $("#home").slideDown();
}

  var nameOutput = $("#name").val();
    $(".greeting").show();
    $(".name").text(nameOutput);

    event.preventDefault();
  });
});
