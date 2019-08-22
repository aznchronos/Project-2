$(document).ready(function() {
  //AUDIO ADDED IN
  /////////////////////
  var titleMusic = new Audio("./js/titleScreen.mp3");
titleMusic.loop = true;
  document.onkeyup = function(){
    titleMusic.play();
  }

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
    $.ajax({
      method: "POST",
      url: "/auth",
      data: user,
      error: function(xhr, ajaxOptions, thrownError) {
        console.log('There was an error', xhr.responseText);
        warning();
      },
      success: function(data) {
        console.log("This is the data from login.js " + data);
        //checks if data came back and if so does a redirect (currently redirecting to the create route)
        if (data !== null) {
          $("#user").val("");
          $("#pass").val("");
          console.log(data);
          window.localStorage.setItem("ID", data.id);
          window.localStorage.setItem("Name", data.characterName);
          // console.log("This is the data.id for login.js " + data.ID);
          // console.log("This is the data.characterName for login.js " + data.characterName);
          window.location.href = "/character";

          return;
        }
        console.log("there was an error")
        return;
      }
    })
  });
  //redirects to create an account page
  $("#create").on("click", function() {
    window.location.href = "/create";
  });
});

function warning(){
  $(".warning").css("display", "none");
  document.querySelector(".warning").style.display = "block";
}
