$(document).ready(function() {
  //character element from html
  var character = $("#character");

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

  //function that alters buttons based on where you are on the map
  function alterButton(button, swap, action) {
    $("#" + button).css("visibility", swap);
    $("#" + button).html(action);
  }
  
  var position = 1; // counter variable that keeps track of where you are on the map
  //switch case called on page load then recursively in each position function
  function switcher() {
    switch (position) {
    case 1:
      position1();
      break;

    case 2:
      position2();
    case 3:
      position3();
    }
  }
  function position1() {
    //each of these functions swap out the controls based on your current position
    alterButton("left", "hidden", "left");
    alterButton("right", "hidden", "right");
    alterButton("down", "hidden", "down");
    $("#up").on("click", function() {
      $(character).animate({ top: "600px" }, 2000, function() {
        position = 2;
        switcher();
      });
    });
  }
  function position2() {
    alterButton("left", "visible", "left (inspect)");
    $("#left").on("click", function() {
      console.log("hello!");
      $(character).animate({ left: "20px" }, 2000, function() {
        possibleEncounter.enounter();
      });
    });
    $("up").on("click", function() {
      alterButton("left", "hidden", "left");
      $(character).animate({ top: "500" }, 2000, function() {
        position = 3;
        switcher();
      });
    });
  }

  function position3() {
    alterButton("right", "visible", "right");
    $("up").on("click", function() {
      $(character).animate({ top: "300" }, 2000, function() {
        position = 4;
        switcher();
      });
    });
  };


  switcher();
});
