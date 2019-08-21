
//////////////////////////////////////////////////////////////
//ADVENTURER ANIMATION
//////////////////////////////////////////////////////////////
let adImg = new Image();
adImg.src = './charSprite.png';



let AdventurerCanvas = document.getElementById("adventurerAnimationID");
let adCtx = AdventurerCanvas.getContext('2d');

//Scale will be 3 for normal gameplay and 5 for title screen
const adScale = 3;
const adWidth = 50;
const adHeight = 37;
const adScaledWidth = adWidth * adScale;
const adScaledHeight = adHeight * adScale;
var adAnimation;
var myAdAnimation = null;


$("#death").on("click", function () {
    adAnimation = 1;
    init()
});

$("#idle").on("click", function () {
    adAnimation = null;
    init()
});

$("#attack").on("click", function () {
    adAnimation = 0;
    init()
});

$("#running").on("click", function () {
    adAnimation = 2;
    init()
});


function init() {
    adFrameCount = 6;
    window.cancelAnimationFrame(myAdAnimation);
    adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
    switch (adAnimation) {
        case 0:
            myAdAnimation = window.requestAnimationFrame(stepAdAttack);
            break;
        case 1:
            myAdAnimation = window.requestAnimationFrame(stepAdDeath);
            break;
        case 2:
            myAdAnimation = window.requestAnimationFrame(stepAdRunning);
            break;
        default:
            myAdAnimation = window.requestAnimationFrame(stepAdIdle);
    }
}

//Frames for animations
const adCycleLoopRunning = [1, 2, 3, 4, 5, 6]
const adCycleLoopAttack = [0, 1, 2, 3, 4, 5, 6, 7];
const adCycleLoopIdle = [0, 1, 2, 3];
const adCycleLoopDeath = [2, 3, 4, 5, 5, 5, 5, 5, 5, 5];
//Looping Indexes
let adCurrentLoopIndexR = 0;
let adCurrentLoopIndexA = 0;
let adCurrentLoopIndexI = 0;
let adCurrentLoopIndexD = 0;

let adCrameCount = 6;


function stepAdDeath() {

    adFrameCount++;
    if (adFrameCount < 6) {
        myAdAnimation = window.requestAnimationFrame(stepAdDeath);
        return;
    }
    adFrameCount = 0;
    adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
    drawFrame(adCycleLoopDeath[adCurrentLoopIndexD], 9, 0, 0);
    adCurrentLoopIndexD++;
    if (adCurrentLoopIndexD >= adCycleLoopDeath.length) {
        adCurrentLoopIndexD = 0;
    }
    myAdAnimation = window.requestAnimationFrame(stepAdDeath);
}




function stepAdIdle() {

    adFrameCount++;
    if (adFrameCount < 10) {
        myAdAnimation = window.requestAnimationFrame(stepAdIdle);
        return;
    }
    adFrameCount = 0;
    adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
    drawFrame(adCycleLoopIdle[adCurrentLoopIndexI], 0, 0, 0);
    adCurrentLoopIndexI++;
    if (adCurrentLoopIndexI >= adCycleLoopIdle.length) {
        adCurrentLoopIndexI = 0;
    }
    myAdAnimation = window.requestAnimationFrame(stepAdIdle);
}




function stepAdRunning() {

    adFrameCount++;
    if (adFrameCount < 6) {
        myAdAnimation = window.requestAnimationFrame(stepAdRunning);
        return;
    }
    adFrameCount = 0;
    adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
    drawFrame(adCycleLoopRunning[adCurrentLoopIndexR], 1, 0, 0);
    adCurrentLoopIndexR++;
    if (adCurrentLoopIndexR >= adCycleLoopRunning.length) {
        adCurrentLoopIndexR = 0;
    }
    myAdAnimation = window.requestAnimationFrame(stepAdRunning);
}




function stepAdAttack() {

    adFrameCount++;
    if (adFrameCount < 6) {
        myAdAnimation = window.requestAnimationFrame(stepAdAttack);
        return;
    }
    adFrameCount = 0;
    adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
    drawFrame(adCycleLoopAttack[adCurrentLoopIndexA], 6, 0, 0);
    adCurrentLoopIndexA++;
    if (adCurrentLoopIndexA >= adCycleLoopAttack.length) {
        adCurrentLoopIndexA = 0;
        adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
        window.cancelAnimationFrame(myAdAnimation)
        myAdAnimation = window.requestAnimationFrame(stepAdIdle);
        return;
    }
    myAdAnimation = window.requestAnimationFrame(stepAdAttack);

}


function drawFrame(frameX, frameY, canvasX, canvasY) {
    adCtx.drawImage(adImg,
        frameX * adWidth, frameY * adHeight, adWidth, adHeight,
        canvasX, canvasY, adScaledWidth, adScaledHeight);
}

//////////////////////////////////////////////////////////////
//DEMON ANIMATION
//////////////////////////////////////////////////////////////
let demonImg = new Image();
demonImg.src = "./attack.png"

let demonImg2 = new Image();
demonImg2.src = "./idle.png"


let demonCanvas = document.getElementById('demonAnimationID');


let demonCtx = demonCanvas.getContext('2d');

$("#idle").on("click", function () {
    demonAnimation = null;

    demonInit()

});

$("#attack").on("click", function () {
    demonAnimation = 0;

    demonInit()

});
//For the first image
const demonScale = 2.5;
const demonWidth = 240;
const demonHeight = 192;
const demonScaledWidth = demonScale * demonWidth;
const demonScaledHeight = demonScale * demonHeight;

//For the second image
const demonScale2 = 2;
const demonWidth2 = 160;
const demonHeight2 = 144;
const demonScaledWidth2 = demonScale2 * demonWidth;
const demonScaledHeight2 = demonScale2 * demonHeight;
var demonAnimation = null
var myDemonAnimation;


function demonInit() {
    demonFrameCount = 6;
    window.cancelAnimationFrame(myDemonAnimation);
    demonCtx.clearRect(0, 0, demonCanvas.width, demonCanvas.height);
    switch (demonAnimation) {
        case 0:

            myDemonAnimation = window.requestAnimationFrame(stepDemonAttack);
            break;
        default:
            myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
    }
}

const demonCycleLoopIdle = [0, 1, 2, 3, 4, 5];
const demonCycleLoopAttack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let demonCurrentLoopIndexA = 0;
let demonCurrentLoopIndexI = 0;



function stepDemonAttack() {
    //Keeps track of the frame count
    demonFrameCount++;
    if (demonFrameCount < 6) {
        myDemonAnimation = window.requestAnimationFrame(stepDemonAttack);
        return;
    }

    demonFrameCount = 0;
    demonCtx.clearRect(0, 0, demonCanvas.width, demonCanvas.height);


    drawDemonFrameAttack(demonCycleLoopAttack[demonCurrentLoopIndexA], 0, 0, 0);

    demonCurrentLoopIndexA++;


    //Keeps the loop going for the animation
    if (demonCurrentLoopIndexA >= demonCycleLoopAttack.length) {
        demonCurrentLoopIndexA = 0;
        demonCtx.clearRect(0, 0, demonCanvas.width, demonCanvas.height);
        window.cancelAnimationFrame(myDemonAnimation)
        myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
        return;

    }



    myDemonAnimation = window.requestAnimationFrame(stepDemonAttack);
}
function stepDemonIdle() {

    //Keeps track of the frame count
    demonFrameCount++;
    if (demonFrameCount < 6) {
        myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
        return;
    }

    demonFrameCount = 0;
    demonCtx.clearRect(0, 0, demonCanvas.width, demonCanvas.height);

    drawDemonFrameIdle(demonCycleLoopIdle[demonCurrentLoopIndexI], 0, 0, 0);

    demonCurrentLoopIndexI++;


    //Keeps the loop going for the animation
    if (demonCurrentLoopIndexI >= demonCycleLoopIdle.length) {
        demonCurrentLoopIndexI = 0;

    }



    myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
}


function drawDemonFrameIdle(frameX, frameY, canvasX, canvasY) {
    demonCtx.drawImage(
        demonImg2,
        frameX * demonWidth2, frameY * demonHeight2, demonWidth2, demonHeight2,
        canvasX + 100, canvasY + 85, demonScaledWidth2, demonScaledHeight2
    );
}

function drawDemonFrameAttack(frameX, frameY, canvasX, canvasY) {
    demonCtx.drawImage(
        demonImg,
        frameX * demonWidth, frameY * demonHeight, demonWidth, demonHeight,
        canvasX, canvasY, demonScaledWidth, demonScaledHeight
    );
}

//////////////////////////////////////////////////////////////
//MINOTAUR ANIMATION
//////////////////////////////////////////////////////////////

let minImg = new Image();
minImg.src = "./minotaur.png"


let minCanvas = document.getElementById('minotaurAnimationID');


let minCtx = minCanvas.getContext('2d');



$("#death").on("click", function () {
    minAnimation = 1;
    minInit()
});

$("#idle").on("click", function () {
    minAnimation = null;
    minInit()

});

$("#attack").on("click", function () {
    minAnimation = 0;
    minInit()

});


const minScale = 2.5;
const minWidth = 95;
const minHeight = 100;
const minScaledWidth = minScale * minWidth;
const minScaledHeight = minScale * minHeight;
var minAnimation = null;
var myMinAnimation;


function minInit() {
    minFrameCount = 6;
    window.cancelAnimationFrame(myMinAnimation);
    minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);
    switch (minAnimation) {
        case 0:
            myMinAnimation = window.requestAnimationFrame(stepMinAttack);
            break;
        case 1:
            myMinAnimation = window.requestAnimationFrame(stepMinDying);
            break;
        default:
            myMinAnimation = window.requestAnimationFrame(stepMinIdle);
    }




}
// Looping frames
const minCycleLoopIdle = [0, 1, 2, 3, 4, 3, 2, 1, 0];
const minCycleLoopAttack = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const minCycleLoopDeath = [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4];
//Looping Indexes
let minCurrentLoopIndexI = 0;
let minCurrentLoopIndexA = 0;
let minCurrentLoopIndexD = 0;

var minFrameCount = 6;


//Animation function that is recursive for idle
function stepMinIdle() {

    //Keeps track of the frame count
    minFrameCount++;
    if (minFrameCount < 6) {
        myMinAnimation = window.requestAnimationFrame(stepMinIdle);
        return;
    }

    minFrameCount = 0;
    minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);

    minDrawFrameIdle(minCycleLoopIdle[minCurrentLoopIndexI], 0, 0, 0);

    minCurrentLoopIndexI++;


    //Keeps the loop going for the animation
    if (minCurrentLoopIndexI >= minCycleLoopIdle.length) {
        minCurrentLoopIndexI = 0;

    }

    myMinAnimation = window.requestAnimationFrame(stepMinIdle);
}

//Animation function that is recursive for Attack
function stepMinAttack() {
    //Keeps track of the frame count
    minFrameCount++;
    if (minFrameCount < 6) {
        myMinAnimation = window.requestAnimationFrame(stepMinAttack);
        return;
    }

    minFrameCount = 0;
    minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);


    minDrawFrameAttack(minCycleLoopAttack[minCurrentLoopIndexA], 0, 0, 0);

    minCurrentLoopIndexA++;


    //Keeps the loop going for the animation
    if (minCurrentLoopIndexA >= minCycleLoopAttack.length) {
        minCurrentLoopIndexA = 0;
        minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);
        window.cancelAnimationFrame(myMinAnimation)
        myMinAnimation = window.requestAnimationFrame(stepMinIdle);
        return;


    }



    myMinAnimation = window.requestAnimationFrame(stepMinAttack);
}

//Animation function that is recursive for Dying
function stepMinDying() {
    //Keeps track of the frame count
    minFrameCount++;
    if (minFrameCount < 6) {
        myMinAnimation = window.requestAnimationFrame(stepMinDying);
        return;
    }

    minFrameCount = 0;
    minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);

    minDrawFrameDeath(minCycleLoopDeath[minCurrentLoopIndexD], 0, 0, 0);

    minCurrentLoopIndexD++;

    //Keeps the loop going for the animation

    if (minCurrentLoopIndexD >= minCycleLoopDeath.length) {
        minCurrentLoopIndexD = 0;
        minCtx.clearRect(0, 0, minCanvas.width, minCanvas.height);
        window.cancelAnimationFrame(myMinAnimation)
        return;

    }


    myMinAnimation = window.requestAnimationFrame(stepMinDying);
}


function minDrawFrameIdle(frameX, frameY, canvasX, canvasY) {
    minCtx.drawImage(
        minImg,
        frameX * minWidth, (frameY * minHeight) + 960, minWidth, minHeight,
        canvasX, canvasY, minScaledWidth, minScaledHeight
    );
}

function minDrawFrameAttack(frameX, frameY, canvasX, canvasY) {
    minCtx.drawImage(
        minImg,
        frameX * minWidth, (frameY * minHeight) + 1250, minWidth, minHeight,
        canvasX, canvasY, minScaledWidth, minScaledHeight
    );
}
function minDrawFrameDeath(frameX, frameY, canvasX, canvasY) {
    minCtx.drawImage(
        minImg,
        frameX * minWidth, (frameY * minHeight) + 1825, minWidth, minHeight,
        canvasX, canvasY, minScaledWidth, minScaledHeight
    );
}

let gImageAppears = new Image();
gImageAppears.src = "./ghost-appears.png";

let gImageIdle = new Image();
gImageIdle.src = "./ghost-idle.png";

let gImageAttack = new Image();
gImageAttack.src = "./ghost-shriek.png";

let gImageDeath = new Image();
gImageDeath.src = "./ghost-vanish.png";

$("#idle").on("click", function () {
    gAnimation = null;
    gInit();
})
$("#attack").on("click", function () {
    gAnimation = 1;
    gInit();
})
$("#death").on("click", function () {
    gAnimation = 2;
    gInit();
})
$("#spawn").on("click", function () {
    gAnimation = 0;
    gInit();
})

let ghostCanvas = document.getElementById("ghostAnimationID");
let gCtx = ghostCanvas.getContext('2d');
//For image 1
const gScale1 = 3;
const gWidth = 64
const gHeight1 = 48
const gScaledWidth1 = gScale1 * gWidth;
const gScaledHeight1 = gScale1 * gHeight1;
var gAnimation;
var myGAnimation = null;

//For image 2
const gScale2 = 3;
const gHeight2 = 80
const gScaledWidth2 = gScale2 * gWidth;
const gScaledHeight2 = gScale2 * gHeight2;

//For image 3
const gScale3 = 3;
const gHeight3 = 80;
const gScaledWidth3 = gScale3 * gWidth;
const gScaledHeight3 = gScale3 * gHeight3;

//For image 4
const gScale4 = 2;
const gHeight4 = 64;
const gScaledWidth4 = gScale4 * gWidth;
const gScaledHeight4 = gScale4 * gHeight4;



let gFrameCount = 6;
const gCycleLoopSpawn = [0, 1, 2, 3, 4, 5];
const gCycleLoopIdle = [01, 2, 3, 4, 5, 6];
const gCycleLoopAttack = [0, 1, 2, 3];
const gCycleLoopDeath = [0, 1, 2, 3, 4, 5, 6];

let gLoopIndexS = 0;
let gLoopIndexI = 0;
let gLoopIndexA = 0;
let gLoopIndexD = 0;


function gInit() {
    gFrameCount = 6;
    window.cancelAnimationFrame(myGAnimation);
    gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);
    switch (gAnimation) {
        case 0:
            myGanimation = window.requestAnimationFrame(stepGSpawn);
            break;
        case 1:
            myGanimation = window.requestAnimationFrame(stepGAttack)
            break;
        case 2:
            myGanimation = window.requestAnimationFrame(stepGDeath);
            break;
        default:
            myGAnimation = window.requestAnimationFrame(stepGIdle);
            break;
    }
}

function stepGSpawn() {
    //Keeps track of the frame count
    gFrameCount++;
    if (gFrameCount < 6) {
        myGAnimation = window.requestAnimationFrame(stepGSpawn);
        return;
    }

    gFrameCount = 0;
    gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);

    drawGFrameSpawn(gCycleLoopSpawn[gLoopIndexS], 0, 0, 0);

    gLoopIndexS++;

    //Keeps the loop going for the animation

    if (gLoopIndexS >= gCycleLoopSpawn.length) {
        gLoopIndexS = 0;
        gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);
        window.cancelAnimationFrame(myGAnimation)
        myGAnimation = window.requestAnimationFrame(stepGIdle);
        return;
    }


    myGAnimation = window.requestAnimationFrame(stepGSpawn);
}
function stepGIdle() {
    //Keeps track of the frame count
    gFrameCount++;
    if (gFrameCount < 6) {
        myGAnimation = window.requestAnimationFrame(stepGIdle);
        return;
    }

    gFrameCount = 0;
    gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);

    drawGFrameIdle(gCycleLoopIdle[gLoopIndexI], 0, 0, 0);

    gLoopIndexI++;

    //Keeps the loop going for the animation

    if (gLoopIndexI >= gCycleLoopIdle.length) {
        gLoopIndexI = 0;

    }


    myGAnimation = window.requestAnimationFrame(stepGIdle);

}
function stepGAttack() {
    //Keeps track of the frame count
    gFrameCount++;
    if (gFrameCount < 6) {
        myGAnimation = window.requestAnimationFrame(stepGAttack);
        return;
    }

    gFrameCount = 0;
    gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);

    drawGFrameAttack(gCycleLoopAttack[gLoopIndexA], 0, 0, 0);

    gLoopIndexA++;

    //Keeps the loop going for the animation

    if (gLoopIndexA >= gCycleLoopAttack.length) {
        gLoopIndexA = 0;
        gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);
        window.cancelAnimationFrame(myGAnimation)
        myGAnimation = window.requestAnimationFrame(stepGIdle);
        return;
    }


    myGAnimation = window.requestAnimationFrame(stepGAttack);

}
function stepGDeath() {
    //Keeps track of the frame count
    gFrameCount++;
    if (gFrameCount < 6) {
        myGAnimation = window.requestAnimationFrame(stepGDeath);
        return;
    }

    gFrameCount = 0;
    gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);

    drawGFrameDeath(gCycleLoopDeath[gLoopIndexD], 0, 0, 0);

    gLoopIndexD++;

    //Keeps the loop going for the animation

    if (gLoopIndexD >= gCycleLoopDeath.length) {
        gLoopIndexD = 0;
        gCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);
        window.cancelAnimationFrame(myGAnimation)
        return;

    }


    myGAnimation = window.requestAnimationFrame(stepGDeath);



}

function drawGFrameAttack(frameX, frameY, canvasX, canvasY) {
    gCtx.drawImage(
        gImageAttack,
        frameX * gWidth, frameY * gHeight3, gWidth, gHeight3,
        canvasX, canvasY, gWidth + 100, gScaledHeight3
    );

}
function drawGFrameIdle(frameX, frameY, canvasX, canvasY) {
    gCtx.drawImage(
        gImageIdle,
        frameX * gWidth, frameY * gHeight2, gWidth, gHeight2,
        canvasX, canvasY, gWidth + 100, gScaledHeight2
    );

}
function drawGFrameSpawn(frameX, frameY, canvasX, canvasY) {
    gCtx.drawImage(
        gImageAppears,
        frameX * gWidth, frameY * gHeight1, gWidth, gHeight1,
        canvasX, canvasY + 50, gWidth + 100, gScaledHeight1
    );

}
function drawGFrameDeath(frameX, frameY, canvasX, canvasY) {
    gCtx.drawImage(
        gImageDeath,
        frameX * gWidth, frameY * gHeight4, gWidth, gHeight4,
        canvasX, canvasY + 25, gWidth + 100, gScaledHeight4
    );

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGIC FOR BATTLEING
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//typewriter effect for battling
let textChar = 0;
function type(text) {
    if (textChar < text.length) {
      $("#battleText").append(text.charAt(textChar));
      textChar ++;
      setTimeout(function() {
        type(text);
      }, 10);
    }
 
  }

function emptyBattleText() {
    $("#battleText").empty();
}

  //conditionals to check if stat boosts have been taken
opened = false
altarTaken = false;
bookRead = false;
statueUsed = false;
$("body").on("click", ".commands", function() {
    $(".commands").css("display", "none");
    setTimeout(function() {
        $(".commands").fadeIn();
    }, 1500)

});
$("#open").on("click", function() {
    if (!opened) {
        adventurerOBJ.score += 100;
        opened = true;
    }

});

$("#altarButton").on("click", function() {
    if (!altarTaken) {
        adventurerOBJ.strength += 1;
        altarTaken = true;
    }

})
$("#books").on("click", function() {
    if (!bookRead) {
        bookRead = true;
    }

});
$("#statue").on("click", function() {
    if (!statueUsed) {
        adventurerOBJ.health = 15;
        $("#inner").animate({width: "100%"});
        currentCharPercent = 100;
        updateCharHP();
        statueUsed = true;
    }
})

let currentCharPercent = 100;
let currentEnemyPercent = 100;
let currentHPText = $("#currentHP");
let currentEnemyHPText = $("#currentEnemy");
function deRender() {  
    $("#renderBattle").css("display", "none");
    $("#endBattle").fadeIn();
    $(".container").fadeIn();
}
function lose() {
    $("#renderBattle").css("display", "none");
    $("#endBattle").fadeIn();
    $(".container").fadeIn();
    $("#winLose").html("lost!")
    $(".return").css("display", "none");
    $("#endBattle").append("<button id='title' class=return>Return to Title</button>");
    $("#score").html("Total Score: " + adventurerOBJ.score);

}

function win() {
    $("#renderBattle").css("display", "none");
    $("#endBattle").fadeIn();
    $(".container").fadeIn()
    $("#winLose").html("beat the game!");
    $(".return").css("display", "none");
    $("#endBattle").append("<button id='title' class=return>Return to Title</button>");
    $("#score").html("Total Score: " + adventurerOBJ.score);
}
function isAlive(obj) {
    if (obj.health  > 0) {
        console.log("alive")
    }
    else if (obj == enemyOBJ) {
       
       if (enemyOBJ.name === "Minotaur") {
        setTimeout(deRender, 500);
        minAnimation = 1;
        minInit(); 
        adventurerOBJ.score += 50;

       } else if (enemyOBJ.name === "Ghost"){
        setTimeout(deRender, 500);
        gAnimation = 2;
        gInit();
        adventurerOBJ.score += 50;

       } else if (enemyOBJ.name === "Demon"){
        setTimeout(win, 500);
        adventurerOBJ.score += 100;
       }
    } else if ((obj == adventurerOBJ) && (obj.health  < 0)) {
        setTimeout(lose, 1200);
        setTimeout(function(){
             adAnimation = 1;
            init();

        }, 1000)
       
    }
}




function takeDamage() {
    emptyBattleText();
    textChar = 0;
    
    var missChance = Math.floor((Math.random() * 2) + 1);
    if (enemyOBJ.name === "Demon" && bookRead) {
        missChance = Math.floor((Math.random() * 10) + 1);
    }  
    if (adventurerOBJ.health > 0 && missChance == 2) {
        if (enemyOBJ.name === "Demon"){         
            currentCharPercent -= 50;
            setTimeout(function() {
                type("The " + enemyOBJ.name + " hit you for " + enemyOBJ.strength + " damage!");

            }, 250);
            
        } else {   
            currentCharPercent -=14;
            setTimeout(function() {
                type("The " + enemyOBJ.name + " hit you for " + enemyOBJ.strength + " damage!");

            }, 250);
        } 
 
        adventurerOBJ.health -= enemyOBJ.strength;
        isAlive(adventurerOBJ);
        console.log("character % " + currentCharPercent)
        $("#inner").animate({ width: currentCharPercent + "%" });

        updateCharHP();

    } else if (missChance == 2) {
        type("The " + enemyOBJ.name + " missed you!")

    } else if (missChance !== 5) {
        type("The " + enemyOBJ.name + " missed you!")

    } else if (adventurerOBJ.health < 0) {
       
        adventurerOBJ.health = 0;
        updateCharHP();
        $("#inner").animate({ width: "0%" })
    }
    console.log(missChance);

    console.log(adventurerOBJ.health);
}


function dealDamage() {
    
    var missChance = Math.floor((Math.random() * 5) + 1);
    if (enemyOBJ.health > 0) {
        if (!altarTaken){
         
            currentEnemyPercent -= 14;
            type("You deal " + adventurerOBJ.strength + " damage to the " + enemyOBJ.name);    

        } else if (altarTaken) {
            
            currentEnemyPercent -= 20;  
            type("You deal " + adventurerOBJ.strength + " damage to the " + enemyOBJ.name);    
        }
       
        enemyOBJ.health -= adventurerOBJ.strength;
        $("#innerEnemy").animate({ width: currentEnemyPercent + "%" });
        updateEnemyHP();
       
        console.log("this is textchar " + textChar)

    }

}

// your character object
var adventurerOBJ = {
    hpTotal: 15,
    health: 15,
    strength: 2,
    speed: 100,
    score: 0
}
//empty enemy object to be delared within encounter/bossencounter
var enemyOBJ;
//these two update the text for hp for enemies and character
function updateCharHP() {
    $(currentHPText).html(adventurerOBJ.health);

}
function updateEnemyHP() {
    $(currentEnemyHPText).html(enemyOBJ.health);
}



//these on click functions begin either the regular encounter or boss encounter
$("#start").on("click", function () {
    encounter();
})
$("#boss").on("click", function(){
    console.log("we here");
    bossEncounter()

})

//loads when you're in the boss room
function bossEncounter() {
    emptyBattleText();
    $("#innerEnemy").animate({ width: "100%" });
    
   
    $("#minotaurAnimationID").css("display", "none");
    $("#ghostAnimationID").css("display","none");
    enemyOBJ = {
        name: "Demon",
        hpTotal: 20,
        health: 20,
        strength: 8,
        speed: 20
    }
  

    updateEnemyHP()
    
    currentEnemyPercent = 100;
    init();
    demonInit();
 

}
//function for rendering sprites for regular battles
function encounter() {
    emptyBattleText();

   
    var enemyChoice = Math.floor(Math.random() * 10);
    //Calls up the animation for the main character
    init()

    // ghost is enemy
    if (enemyChoice < 6) {
        enemyOBJ = {
            name: "Ghost",
            hpTotal: 15,
            health: 15,
            strength: 2,
            speed: 20
        }
        $("ghostAnimationID").css({ right: "0px", left: "200px" });

        $("#minotaurAnimationID").css("display", "none");
        $("#adventurerAnimationID").css({
            'right': '0px',
            'left': '200px'
        });
        console.log("this is the demon init")
        gInit();
    } else {
        $("ghostAnimationID").css("display", "none")
        enemyOBJ = {
            name: "Minotaur",
            hpTotal: 15,
            health: 15,
            strength: 2,
            speed: 20,
        }

        // currentCharPercent = 100;
     

        $("#adventurerAnimationID").css({
            'right': '0px',
            'left': '300px'
        });
        minInit();

    }
    currentEnemyPercent = 100;

    $("#innerEnemy").animate({ width: "100%" });
    $(currentEnemyHPText).html("15");
    
}
//
$("#attackCommand").on("click", function () {
    emptyBattleText();
    textChar = 0;
    //Sees who goes first, than deals damage
    if (adventurerOBJ.speed > enemyOBJ.speed) {
 
        adAnimation = 0;
        init();
        dealDamage();
        isAlive(enemyOBJ);


        if (enemyOBJ.name == "Minotaur") {
          
   
            minAnimation = 0;
            setTimeout(minInit, 1500);
            setTimeout(takeDamage, 1500);
            setTimeout(isAlive(adventurerOBJ), 1000);
        




         } else if (enemyOBJ.name == "Ghost") {
            
     
            gAnimation = 1;
            setTimeout(gInit, 1500);
            setTimeout(takeDamage, 1500);
            setTimeout(isAlive(adventurerOBJ));
      

        } else {
      
            demonAnimation = 0;
            setTimeout(demonInit, 1500);
            setTimeout(takeDamage, 1500);
            setTimeout(isAlive(adventurerOBJ));

        }

}
    //If the enemy is faster
    else {
        if(enemyOBJ.name == "Minotaur"){
    minAnimation = 0;
    if (enemyOBJ.health > 0) {
        minInit();
    }


}
        else {
    gAnimation = null;
    gInit();
}
adAnimation = 0;
setTimeout(init, 1000);
    }
});
$("#itemCommand").on("click", function () {
    //Brings up list of items

});
$("#runCommand").on("click", function () {
    //Runs a random chance to leave the battle but you lose your turn if you dont roll correctly

});
function damage() {

}
function ending() {

}
