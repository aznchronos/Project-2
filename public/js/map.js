

$(document).ready(function() {
  var character = $("#characterAnimation");
  let textNook = "You peek down the hall peering into the darkness and run headfirst into a hulking monster!";
  let textAltar = "You enter a circular room with nothing inside except an altar with a red skull!"; 
  let textBookcase = "As you enter the room you see a shelf full of books of a variety of colors!";
  let textChest = "You round the corner and find yourself in front of an unlocked chest seemingly overflowing with treasure!"
  let textStatue = "You enter a rectangular room with a large looming grey statue reseumbling a gargoyle!"
  let textNothing = "Nothing interesting here!"
  let i = 0;


  function type(text) {
    console.log("typewriter loading")
    $("#textBox").fadeIn();
    $("#buttonDiv").fadeIn()
    
    if (i < text.length) {
      $("#text").append(text.charAt(i));
      i ++;
      setTimeout(function() {
        type(text);
      }, 20);
    }
  }

  function empty() {
    i = 0;
    $("#text").empty();
    $("#textBox").fadeOut(500);
  }
  function renderBattle(){
    $(".container").css("display", "none");
    $("#renderBattle").fadeIn(2000);
  }
  
  $("body").on("click", "#start", function() {
    renderBattle();
  });

 

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
        empty();
  
        alterY("510px", 200, 3);
        alterButton("left", "hidden", "left");
        alterButton("right", "visible", "right");
      }
      if (position === 3) {
       
        alterY("400px", 200, 4);
        alterButton("up", "visible", "Inspect");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 4) {
        type(textAltar);
        
       
   
      }
      if (position === 5) {
        alterY("260px", 200, 7);
      }
      if (position === 6) {
        type(textStatue);
      }
      if (position === 7) {
        alterY("110px", 200, 9);
        alterButton("right", "hidden", "right");
        alterButton("up", "hidden", "up");
      }
      if (position === 11) {
        alterButton("right", "visible", "right");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
        alterY("55px", 500, 7);
        alterX("705px", 500, 7);
        $(character).animate({ left: "-=60px", top: "+=75px" }, 500);
        alterY("207px", 500, 7);
        alterX("490px", 500, 7);
        alterY("260px", 500, 7);
        alterX("295px", 500, 7);
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
      if (position === 2) {
        type(textNook);
       
      }
      if (position === 5) {
        alterX("67px", 200, 3);
        alterButton("left", "hidden", "left");
      }
      if (position === 6) {
        empty();
        alterX("295px", 200, 5);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("right", "visible", "right");

        alterButton("down", "visible", "down");
      }
      if (position === 7) {
        alterX("135px", 200, 8);
        alterButton("up", "hidden", "up");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 9) {
        alterX("80px", 200, 10);
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 10) {
        type(textBookcase);

      }

      if (position === 11) {
        type(textChest);
      }
      if (position === 13) {
        alterX("295px", 200, 12);
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
        alterX("295px", 200, 5);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("left", "visible", "left");
      }
      if (position === 5) {
        alterX("630px", 200, 6);
        alterButton("up", "visible", "Inspect");
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
      }
      if (position === 7) {
        alterButton("right", "hidden", "right");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "visible", "Inspect");
        alterX("490px", 500, 11);
        alterY("207px", 500, 11);
        alterX("645px", 500, 11);
        alterY("120px", 500, 11);
        $(character).animate({ left: "+=70px", top: "-=65px" }, 500);
        alterX("817px", 500, 11);
        alterY("260px", 500, 11);
      }
      if (position === 8) {
        alterX("295px", 200, 7);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
      }
      if (position === 10) {
        empty();
        alterX("295px", 200, 9);
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
        
        empty();
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
        empty();
        alterY("510px", 200, 3);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 5) {
        empty();
        alterY("785px", 200, 12);
        alterButton("left", "hidden", "left");
        alterButton("down", "visible", "Ready?");
      }
      if (position === 7) {
        alterY("510px", 200, 5);
      }
      if (position === 9) {
        alterY("260px", 200, 7);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 11) {
        type(textNothing);
      }
      if (position === 12) {
        alterButton("up", "hidden", "up");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
        alterY("935px", 1000, 14);
        alterX("817px", 1000, 14);
        alterY("495px", 1000, 14);
      }
    });
  }
  ///loads the directional inputs
  loadUp();
  loadLeft();
  loadRight();
  loadDown();
});
