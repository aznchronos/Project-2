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
    $.ajax({
      method: "POST",
      url: "/auth",
      data: user
    });
  });

  //redirects to create an account page
  $("#create").on("click", function() {
    window.location.href = "/create";
  });
});
