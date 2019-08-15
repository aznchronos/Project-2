$(document).ready(function() {
  console.log("jquery loaded");
  go = $("#go");

  $(go).on("click", function() {
    $("canvas").animate({ marginLeft: "700px" }, 2000, function() {
      $("#door").attr("src", "images/dooropen.png");
      $("canvas").animate({ marginLeft: "850px" }, 2000, function() {
        $("body").fadeOut(6000);
      });
    });
  });
});
