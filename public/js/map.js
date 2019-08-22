
  var backGroundMusic = new Audio("./js/background.mp3");
  backGroundMusic.loop = true;
$(document).ready(function() {

  
    document.onkeyup = function(){
      backGroundMusic.play();
    }

  backGroundMusic.loop = true; 
  function playBackground(){
    backGroundMusic.pause();
    backGroundMusic.play();

  }
  playBackground()


  //grabs character div
  var character = $("#characterAnimation");

  //variables that hold text for possible events
  let textNook = "You peek down the hall peering into the darkness and run headfirst into a hulking monster!";
  let textAltar = "You enter a circular room with nothing inside except an altar with a red skull!"; 
  let touchAltar = "Your rage grows..."
  let textBookcase = "You enter a room and see a shelf full of books with a variety of colors. A particular black book grabs your eye!";
  let touchBookcase = "From what you can discern this book might prove useful against a certian blue fire!";
  let textChest = "You round the corner and find yourself in front of an unlocked chest seemingly overflowing with treasure!";
  let textStatue = "You enter a rectangular room with a large looming grey statue reseumbling a gargoyle!";
  let touchStatue = "You feel refreshed!";
  let textNothing = "Nothing interesting here!";
  let textSurprise = "You plunge into the chest grabbing all you can see but don't see something creeping behind you...";
  let textTrapDoor = "You see a wooden board on the floor you think you might be able to move it!";


  //text for after you've taken items
  

  let textBoss = "This room has a feeling of finality...";

  let i = 0;

  //if we wanted to implement not being able to farm enemies
  let firstBattle = false;
  let secondBattle = false;
  let thirdBattle = false;
  let bossBattle =false;
  $("body").on("click", "#title", function() {
    window.location.href = "/"
  });
  $("body").on("click", ".actions", function() {
    $(".direct").fadeIn();
  });
  //when the battle is over return to map
  $("body").on("click", ".return", function() {
    $("#endBattle").fadeOut(1000);
    $(".direct").fadeIn()
  });

  $("body").on("click",".direct", function() {
    $(".direct").css("display", "none");
  });
  //function that creates the typewriter effect and fades in a respective button
  function type(text, button) {
    $("#textBox").fadeIn();
    $("#" + button).fadeIn();
    
    if (i < text.length) {
      $("#text").append(text.charAt(i));
      i ++;
      setTimeout(function() {
        type(text);
      }, 10);
    }
  }
  //clears out textbox
  function empty() {
    i = 0;
    $("#text").empty();
    $("#textBox").css("display", "none");
    $(".actions").css("display", "none");
  }
  function renderBattle(){
    $(".container").css("display", "none");
    $("#renderBattle").fadeIn(2000);
  }
  
  $("body").on("click", "#start", function() {
    renderBattle();
    $("#start").css("display", "none");
    empty();
  });
  $("body").on("click", "#boss", function() {
    renderBattle();
  })

 

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
      $(".direct").fadeIn();
    });
  }

  function alterX(amount, speed, positionAfter) {
    $(character).animate({ left: amount }, speed, function() {
      position = positionAfter;
      $(".direct").fadeIn();
    });
  }
 

  position = 1;

  //loadUp, loadDown, loadLeft, and loadRight are all functions that provide controls for the game;
  function loadUp() {
    $("body").on("click", "#up", function() {
      if (position === 1) {
       
        alterY("580px", 700, 2);
        alterButton("left", "visible", "Inspect");
        alterButton("down", "visible", "down");


      }
      if (position === 2) {
        empty();
  
        alterY("510px", 700, 3);
        alterButton("left", "hidden", "left");
        alterButton("right", "visible", "right");
      }
      if (position === 3) {
       
        alterY("400px", 700, 4);
        alterButton("up", "visible", "Inspect");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 4) {
        type(textAltar, "altarButton");
        
       
   
      }
      if (position === 5) {
        alterY("260px", 700, 7);
      }
      if (position === 6) {
        type(textStatue, "statue");

      }
      if (position === 7) {
        alterY("110px", 700, 9);
        alterButton("right", "hidden", "right");
        alterButton("up", "hidden", "up");
      }
      if (position === 11) {
        empty()
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
        alterY("495px", 700, 5);
      }
      if (position === 13) {
        type(textTrapDoor, "trapDoor");
      }
      if (position === 14) {

      
        type(textBoss, "boss");
     
      }
    });
  }
  function loadLeft() {
    $("body").on("click", "#left", function() {
      if (position === 2) {
        type(textNook, "start");

       
      }
      if (position === 5) {
        alterX("67px", 700, 3);
        alterButton("left", "hidden", "left");
      }
      if (position === 6) {
        empty();
        alterX("295px", 700, 5);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("right", "visible", "right");

        alterButton("down", "visible", "down");
      }
      if (position === 7) {
        alterX("135px", 700, 8);
        alterButton("up", "hidden", "up");
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 8) {
        $(".direct").fadeIn();
        type(textNothing);
      }
      if (position === 9) {
        alterX("80px", 700, 10);
        alterButton("left", "visible", "Inspect");
        alterButton("down", "hidden", "down");
        alterButton("right", "visible", "right");
      }
      if (position === 10) {
        type(textBookcase, "books");

      }

      if (position === 11) {
        empty();
        type(textChest, "open");
      }
      if (position === 13) {
        alterX("295px", 700, 12);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("right", "visible", "right");
        alterButton("left", "hidden", "left");
        empty();
      }
    });
  }
  function loadRight() {
    $("body").on("click", "#right", function() {
      if (position === 3) {
        alterX("295px", 700, 5);
        alterButton("up", "visible", "up");
        alterButton("down", "visible", "down");
        alterButton("left", "visible", "left");
      }
      if (position === 5) {
        alterX("630px", 700, 6);
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
        empty();
        alterX("295px", 700, 7);
        alterButton("up", "visible", "up");
        alterButton("left", "visible", "left");
        alterButton("down", "visible", "down");
      }
      if (position === 10) {
        empty();
        alterX("295px", 700, 9);
        alterButton("left", "visible", "left");
        alterButton("right", "hidden", "right");
        alterButton("down", "visible", "down");
      }
      if (position === 12) {
        alterX("450px", 700, 13);
        alterButton("right", "hidden", "right");
        alterButton("left", "visible", "left");
        alterButton("up", "visible", "Inspect");
        alterButton("down", "hidden", "down");
      }
      if (position === 14) {
        renderBattle();
        
  
      }
    });
  }
  function loadDown() {
    $("body").on("click", "#down", function() {
      if (position === 2) {
        
        empty();
        alterY("800px", 700, 1);
        alterButton("down", "hidden", "down");
        alterButton("left", "hidden", "left");
      }
      if (position === 3) {
        alterY("580px", 700, 2);
        alterButton("right", "hidden", "right");
        alterButton("up", "visible", "up");
        alterButton("left","visible","Inspect");
        
      }
      if (position === 4) {
        empty();
        alterY("510px", 700, 3);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 5) {
        empty();
        alterY("785px", 700, 12);
        alterButton("left", "hidden", "left");
        alterButton("down", "visible", "Ready?");
      }
      if (position === 7) {
        alterY("510px", 700, 5);
      }
      if (position === 9) {
        alterY("260px", 700, 7);
        alterButton("up", "visible", "up");
        alterButton("right", "visible", "right");
      }
      if (position === 11) {
        empty();
        type(textNothing);
        $(".direct").fadeIn();
      }
      if (position === 12) {
        alterButton("up", "visible", "Inspect");
        alterButton("right", "hidden", "right");
        alterButton("down", "hidden", "down");
        alterY("935px", 1000, 14);
        alterX("817px", 1000, 14);
        alterY("495px", 1000, 14);
      }
    });
  }

  let chestDone = false;
  let altarDone = false;
  let booksDone = false;
  let statueDone = false;
  $("#open").on("click", function() {
    if (!chestDone){
      empty();
      type(textSurprise, "start");
      chestDone = true;

    } else {
      empty();
      type("It's already been looted...");
    }
 

  });
  $()
  $("#altarButton").on("click", function() {
    if (!altarDone) {
      empty();
      type(touchAltar);
      altarDone = true;
    } else {
      empty();
      type("Nothing Happens...");
    }
    

  })
  $("#books").on("click", function() {
    if (!booksDone) {
      empty();
      type(touchBookcase);
      booksDone = true;
    } else {
      empty();
      type("You've read all you can from the book...");
    }


  })
  $("#statue").on("click", function() {
    if (!statueDone) {
      empty();
      type(touchStatue);
    } else {
      empty();
      type("Nothing Happens...");
    }

  })
  $("#trapDoor").on("click", function () {
    empty();
    type("A horrible creature crawls out from the depths!", "start");
  })
  ///loads the directional inputs
  loadUp();
  loadLeft();
  loadRight();
  loadDown();
});
