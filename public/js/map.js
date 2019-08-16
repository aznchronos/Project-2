$(document).ready(function() {
  var character = $("#character");

  //character element from html

  //object of possible encoutners within the map called later in the position functions
  var possibleEncounter = {
    getItem: function() {
      console.log("You got an Item!");
    },
    statBoost: function() {
      console.log("You got a stat boost!");
    },
    enounter: function() {
      console.log("Enemy encounter!");
    }
  };

  function alterButton(button, swap, action) {
    $("#" + button).css("visibility", swap);
    $("#" + button).html(action);
  }

  function alterY(amount, speed, positionAfter) {
    $(character).animate({ top: amount }, speed, function() {
      position = positionAfter;
    });
  }

  function alterX(amount, speed, positionAfter) {
    $(character).animate({ left: amount }, speed, function() {
      position = positionAfter;
    });
  }

  position = 1;

  //loadUp, loadDown, loadLeft, and loadRight are all functions that provide controls for the game;
  function loadUp() {
    $("body").on("click", "#up", function() {
      if (position === 1) {
        alterY("600px", 500, 2);
        alterButton("left", "visible", "left (inspect)");
        alterButton("down", "visible", "down");
      }
      if (position === 2) {
        alterY("515px", 500, 3);
        alterButton("left", "hidden", "left");
        alterButton("right", "visible", "right");
      }
      if (position === 3) {
        alterY("400px", 500, 4);
        alterButton("up", "hidden", "up");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 5) {
        alterY("260px", 500, 7);
      }
      if (position === 7) {
        alterY("115px", 500, 9);
        alterButton("right", "hidden", "right");
        alterButton("up", "hidden", "up");
      }
      if (position === 11) {
        alterButton("right", "visible", "right");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
        alterY("58px", 500, 7);
        alterX("730px", 500, 7);
        $(character).animate({ left: "-=80px", top: "+=60px" }, 500);
        alterY("215px", 500, 7);
        alterX("500px", 500, 7);
        alterY("260px", 500, 7);
        alterX("300px", 500, 7);
      }
      if (position === 12) {
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
        alterY("515px", 500, 5);
      }
    });
  }
  function loadLeft() {
    $("body").on("click", "#left", function() {
      if (position === 5) {
        alterX("70px", 500, 3);
      }
      if (position === 6) {
        alterX("300px", 500, 5);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("right", "visible", "right");

        alterButton("down", "visible", "down");
      }
      if (position === 7) {
        alterX("115px", 500, 8);
        alterButton("up", "hidden", "up");
        alterButton("left", "visible", "left (Inspect)");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 9) {
        alterX("70px", 500, 10);
        alterButton("left", "visible", "left (inspect)");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 13) {
        alterX("300px", 500, 12);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("right", "visible", "right");
        alterButton("left", "hidden", "left");
      }
    });
  }
  function loadRight() {
    $("body").on("click", "#right", function() {
      if (position === 3) {
        alterX("300px", 500, 5);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("left", "visible", "left");
      }
      if (position === 5) {
        alterX("625px", 500, 6);
        alterButton("up", "visible", "up (inspect)");
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
      }
      if (position === 7) {
        alterButton("right", "hidden", "right");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "visible", "Inspect");
        alterX("500px", 500, 11);
        alterY("215px", 500, 11);
        alterX("650px", 500, 11);
        alterY("115px", 500, 11);
        $(character).animate({ left: "+=80px", top: "-=57px" }, 500);
        alterX("825px", 500, 11);
        alterY("265px", 500, 11);
      }
      if (position === 8) {
        alterX("300px", 500, 7);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
      }
      if (position === 10) {
        alterX("300px", 500, 9);
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 12) {
        alterX("450px", 500, 13);
        alterButton("right", "hidden", "right");
        alterButton("left", "visible", "left");
        alterButton("up", "visible", "Inspect");
        alterButton("down", "hidden", "down");
      }
    });
  }
  function loadDown() {
    $("body").on("click", "#down", function() {
      if (position === 2) {
        alterY("800px", 500, 1);
        alterButton("down", "hidden", "down");
        alterButton("left", "hidden", "left");
      }
      if (position === 3) {
        alterY("600px", 500, 2);
        alterButton("right", "hidden", "right");
        alterButton("up", "visible", "up");
        alterButton("left","visible","Inspect");
      }
      if (position === 4) {
        alterY("515px", 500, 3);
        alterButton("up", "hidden", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 5) {
        alterY("790px", 500, 12);
        alterButton("left", "hidden", "left");
        alterButton("down", "visible", "Are you Ready?");
      }
      if (position === 7) {
        alterY("515px", 500, 5);
      }
      if (position === 9) {
        alterY("260px", 500, 7);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 12) {
        alterButton("up", "hidden", "up");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
        alterY("938px", 500, 14);
        alterX("820px", 500, 14);
        alterY("515px", 500, 14);
      }
    });
  }
  ///loads the directional inputs
  loadUp();
  loadLeft();
  loadRight();
  loadDown();
});
