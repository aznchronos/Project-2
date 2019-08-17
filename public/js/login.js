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
      //checks if data came back and if so does a redirect (currently redirecting to the create route)
      if (data !== null) {
        console.log(data);
        // console.log("This is the data.id for login.js " + data.ID);
        // console.log("This is the data.characterName for login.js " + data.characterName);
        window.location.href = "/character/" + data.ID;
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
