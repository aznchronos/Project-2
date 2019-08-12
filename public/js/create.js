$(document).ready(function() {
  console.log("jquery loaded");

  $("#newUserButton").on("click", function() {
    var newUsername = $("#newUsername")
      .val()
      .trim();
    var newPass = $("#newPass")
      .val()
      .trim();

    var newUser = {
      name: newUsername,
      pass: newPass
    };

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
  });
});
