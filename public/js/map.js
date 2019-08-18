$(document).ready(function() {
  var character = $(".character");

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
  //functions that either alter the visibility of the buttons or the x and y.
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
        alterY("580px", 200, 2);
        alterButton("left", "visible", "Inspect");
        alterButton("down", "visible", "down");

      }
      if (position === 2) {
        alterY("495px", 200, 3);
        alterButton("left", "hidden", "left");
        alterButton("right", "visible", "right");
      }
      if (position === 3) {
        alterY("380px", 200, 4);
        alterButton("up", "visible", "Inspect");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 5) {
        alterY("240px", 200, 7);
      }
      if (position === 7) {
        alterY("95px", 200, 9);
        alterButton("right", "hidden", "right");
        alterButton("up", "hidden", "up");
      }
      if (position === 11) {
        alterButton("right", "visible", "right");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
        alterY("46px", 200, 7);
        alterX("705px", 200, 7);
        $(character).animate({ left: "-=80px", top: "+=60px" }, 200);
        alterY("190px", 200, 7);
        alterX("480px", 200, 7);
        alterY("240px", 200, 7);
        alterX("280px", 200, 7);
      }
      if (position === 12) {
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
        alterY("495px", 200, 5);
      }
    });
  }
  function loadLeft() {
    $("body").on("click", "#left", function() {
      
      if (position === 5) {
        alterX("50px", 200, 3);
        alterButton("left", "hidden", "left");
      }
      if (position === 6) {
        alterX("270px", 200, 5);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("right", "visible", "right");

        alterButton("down", "visible", "down");
      }
      if (position === 7) {
        alterX("115px", 200, 8);
        alterButton("up", "hidden", "up");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 9) {
        alterX("60px", 200, 10);
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 13) {
        alterX("280px", 200, 12);
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
        alterX("270px", 200, 5);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("left", "visible", "left");
      }
      if (position === 5) {
        alterX("615px", 200, 6);
        alterButton("up", "visible", "Inspect");
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
      }
      if (position === 7) {
        alterButton("right", "hidden", "right");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "visible", "Inspect");
        alterX("480px", 200, 11);
        alterY("195px", 200, 11);
        alterX("630px", 200, 11);
        alterY("95px", 200, 11);
        $(character).animate({ left: "+=80px", top: "-=55px" }, 200);
        alterX("805px", 200, 11);
        alterY("245px", 200, 11);
      }
      if (position === 8) {
        alterX("280px", 200, 7);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
      }
      if (position === 10) {
        alterX("270px", 200, 9);
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 12) {
        alterX("450px", 200, 13);
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
        alterY("800px", 200, 1);
        alterButton("down", "hidden", "down");
        alterButton("left", "hidden", "left");
      }
      if (position === 3) {
        alterY("580px", 200, 2);
        alterButton("right", "hidden", "right");
        alterButton("up", "visible", "up");
        alterButton("left","visible","Inspect");
        
      }
      if (position === 4) {
        alterY("495px", 200, 3);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 5) {
        alterY("770px", 200, 12);
        alterButton("left", "hidden", "left");
        alterButton("down", "visible", "Ready?");
      }
      if (position === 7) {
        alterY("495px", 200, 5);
      }
      if (position === 9) {
        alterY("240px", 200, 7);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 12) {
        alterButton("up", "hidden", "up");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
        alterY("918px", 200, 14);
        alterX("800px", 200, 14);
        alterY("495px", 200, 14);
      }
    });
  }
  ///loads the directional inputs
  loadUp();
  loadLeft();
  loadRight();
  loadDown();
});


