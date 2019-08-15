$(document).ready(function() {
  $("#submit").on("click", function() {
    //creates the body object "user" and sends post request
    var username = $("#user")
      .val()
      .trim();
    var password = $("#pass")
      .val()
      .trim();
    //creating the user object to send in post
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
    }).then(function(data) {
      console.log(data);
      if (data !== null) {
        window.location.href = "/create";
      } else {
        console.log("invalid login credentials");
      }
    });
  });
  //redirects to create an account page
  $("#create").on("click", function() {
    window.location.href = "/create";
  });
});
