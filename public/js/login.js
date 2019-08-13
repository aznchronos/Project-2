$(document).ready(function() {
  $("#submit").on("click", function() {
    //creates the body object "user" and sends post request
    var username = $("#user")
      .val()
      .trim();
    var password = $("#pass")
      .val()
      .trim();

    var user = {
      name: username,
      pass: password
    };
    $("#user").val("");
    $("#pass").val("");
    $.ajax({
      method: "POST",
      url: "/auth",
      data: user
    });
  });
  $("form input").keypress(function(e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $("button[type=submit] .default").click();
      return false;
    } else {
      return true;
    }
  });

  //redirects to create an account page
  $("#create").on("click", function() {
    window.location.href = "/create";
  });
});
