$("h1").css("color", "red");
$(document).keydown(function (e) {
  $("h1").html(e.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
