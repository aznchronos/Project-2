$(document).ready(function() {
  $("#submit").on("click", function() {
    var username = $("#user").val().trim();
    var password = $("#pass").val().trim();

    var user = {
      name: username,
      pass: password
    };
    alert(user.name + user.pass);
  });
});
