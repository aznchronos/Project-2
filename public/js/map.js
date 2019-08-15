$(document).ready(function() {
  console.log("jquery ready");

  var character = $("#character");

  $("#up").on("click", function() {
    $(character).animate({ top: "570px" }, 2000);
  });
});
