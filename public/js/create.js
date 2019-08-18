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
    // If everything fulfills the conditions
    if (
      newUser.name.length >= 5 &&
      newUser.name.length <= 15 &&
      newUser.pass.length >= 5 &&
      newUser.char.length >= 5 &&
      newUser.char.length <= 15
    ) {
      newAccount(newUser);
    } else {
      removeWarnings();
      requirementChecker(newUser);
    }
  });
});

function newAccount(newUser) {
  $.ajax({
    method: "POST",
    url: "/newUser",
    data: newUser
  });
  window.location.href = "/";
}

function requirementChecker(newUser) {
  // 1 Missing:
  // If everything, but the Username, fulfills the conditions
  if (
    newUser.name.length < 5 &&
    newUser.pass.length >= 5 &&
    newUser.char.length >= 5 &&
    newUser.char.length <= 15
  ) {
    document.querySelector(".warning").style.display = "block";
  } // If everything, but the Password, fulfills the conditions
  else if (
    newUser.name.length >= 5 &&
    newUser.name.length <= 15 &&
    newUser.pass.length < 5 &&
    newUser.char.length >= 5 &&
    newUser.char.length <= 15
  ) {
    document.querySelector(".warning2").style.display = "block";
  } // If everything, but the Character Name, fullfills the conditions
  else if (
    newUser.name.length < 5 &&
    newUser.pass.length >= 5 &&
    newUser.char.length >= 5 &&
    newUser.char.length <= 15
  ) {
    document.querySelector(".warning3").style.display = "block";
  } // 2 Missing:
  // If everything is missing, but UserNamee
  else if (
    newUser.name.length >= 5 &&
    newUser.name.length < 15 &&
    newUser.pass.length < 5 &&
    (newUser.char.length < 5 || newUser.char.length > 15)
  ) {
    document.querySelector(".warning2").style.display = "block";
    document.querySelector(".warning3").style.display = "block";
  } // If everything is missing, but Password
  else if (
    (newUser.name.length < 5 || newUser.name.length > 15) &&
    newUser.pass.length >= 5 &&
    (newUser.char.length < 5 || newUser.char.length > 15)
  ) {
    document.querySelector(".warning").style.display = "block";
    document.querySelector(".warning3").style.display = "block";
  } // If everything is missing, but Character Name
  else if (
    (newUser.name.length < 5 || newUser.name.length > 15) &&
    newUser.pass.length < 5 &&
    newUser.char.length >= 5 &&
    newUser.char.length <= 15
  ) {
    document.querySelector(".warning").style.display = "block";
    document.querySelector(".warning2").style.display = "block";
  } // If everything doesn't fit criteria
  else {
    document.querySelector(".warning").style.display = "block";
    document.querySelector(".warning2").style.display = "block";
    document.querySelector(".warning3").style.display = "block";
  }
}

function removeWarnings(){
  $(".warning, .warning2, .warning3").css("display", "none");
}
