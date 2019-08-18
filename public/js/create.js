$(document).ready(function() {
  console.log("jquery loaded");

  $("#newUserButton").on("click", function() {
    //grabs new user and pass creatiion to make a post object
    var newUsername = $("#newUsername")
      .val()
      .trim();
    var newPass = $("#newPass")
      .val()
      .trim();
    var newChar = $("#newChar")
      .val()
      .trim();

    var newUser = {
      name: newUsername,
      pass: newPass,
      char: newChar
    };
    //conditionals to check if user and pass have required lengths
    if (
      newUsername.length >= 5 &&
      newUsername.length <= 20 &&
      newPass.length >= 1
    ) {
      $.ajax({
        method: "POST",
        url: "/newUser",
        data: newUser
      });
    }

    window.location.href = "/";
  });
});
