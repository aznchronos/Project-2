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
const adScaledWidth = adWidth*adScale;
const adScaledHeight = adHeight*adScale;
var adAnimation;
var myAdAnimation = null;


$("#death").on("click", function(){
  adAnimation = 1;
  init()
});

$("#idle").on("click", function(){
  adAnimation = null;
  init()
});

$("#attack").on("click", function(){
  adAnimation = 0;
  init()
});

$("#running").on("click", function(){
  adAnimation = 2;
  init()
});


function init() {
  adFrameCount = 6;
  window.cancelAnimationFrame(myAdAnimation);
  adCtx.clearRect(0, 0, AdventurerCanvas.width, AdventurerCanvas.height);
  switch(adAnimation) {
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
const adCycleLoopRunning = [1,2,3,4,5,6]
const adCycleLoopAttack = [0,1,2,3,4,5,6,7];
const adCycleLoopIdle = [0,1,2,3];
const adCycleLoopDeath = [2,3,4,5,5,5,5,5,5,5];
//Looping Indexes
let adCurrentLoopIndexR = 0;
let adCurrentLoopIndexA = 0;
let adCurrentLoopIndexI = 0;
let adCurrentLoopIndexD = 0;

let adCrameCount = 6;


function stepAdDeath(){

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




function stepAdIdle(){

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




function stepAdRunning(){

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




function stepAdAttack(){

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

$("#idle").on("click", function(){
    demonAnimation = null;

    demonInit()
   
});

$("#attack").on("click", function(){
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
    switch(demonAnimation) {
        case 0:
            
            myDemonAnimation = window.requestAnimationFrame(stepDemonAttack);
          break;
        default:
            myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
      }
}

const demonCycleLoopIdle = [0,1,2,3,4,5];
const demonCycleLoopAttack = [0,1,2,3,4,5,6,7,8,9,10];

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


    drawFrameAttack(demonCycleLoopAttack[demonCurrentLoopIndexA], 0, 0, 0);

    demonCurrentLoopIndexA++;


    //Keeps the loop going for the animation
    if (demonCurrentLoopIndexA >= demonCycleLoopAttack.length) {
        demonCurrentLoopIndexA = 0;
        demonCtx.clearRect(0, 0, demonCanvas.width, demonCanvas.height);
    window.cancelAnimationFrame(myDemonAnimation)
    myDemonAnimation = window.requestAnimationFrame(stepDemonIdle);
    return;

    }



    myDemonAnimation=  window.requestAnimationFrame(stepDemonAttack);
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

    drawFrameIdle(demonCycleLoopIdle[demonCurrentLoopIndexI], 0, 0, 0);

    demonCurrentLoopIndexI++;


    //Keeps the loop going for the animation
    if (demonCurrentLoopIndexI >= demonCycleLoopIdle.length) {
        demonCurrentLoopIndexI = 0;

    }



    myDemonAnimation=  window.requestAnimationFrame(stepDemonIdle);
}


function drawFrameIdle(frameX, frameY, canvasX, canvasY) {
    demonCtx.drawImage(
        demonImg2,
        frameX * demonWidth2, frameY * demonHeight2, demonWidth2, demonHeight2,
        canvasX+100, canvasY+85, demonScaledWidth2, demonScaledHeight2
    );
}

function drawFrameAttack(frameX, frameY, canvasX, canvasY) {
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGIC FOR BATTLEING
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let currentCharPercent = 100;
let currentEnemyPercent = 100;
let currentHPText = $("#currentHP");
let currentEnemyHPText = $("#currentEnemy");




function takeDamage() {
    var missChance = Math.floor((Math.random() * 5) + 1);
    if (adventurerOBJ.health > 0 && missChance !== 5) {
        currentCharPercent -= 14;
        adventurerOBJ.health -= enemyOBJ.strength;
        console.log("character % " + currentCharPercent)
        $("#inner").animate({width: currentCharPercent +"%"});
       
        updateCharHP();

    } else if (missChance === 5) {
        console.log("You Missed!");

    } else if (adventurerOBJ.health < 0) {
        adventurerOBJ.health = 0;
        updateCharHP();
        $("#inner").animate({width: "0%"})
    }
    console.log(missChance);
   
    console.log(adventurerOBJ.health);
}


function dealDamage() {
    var missChance = Math.floor((Math.random() * 5) + 1);
    if (enemyOBJ.health > 0 ){
        currentEnemyPercent -=14;
        enemyOBJ.health -= adventurerOBJ.strength;
        $("#innerEnemy").animate({width: currentEnemyPercent + "%"});
        updateEnemyHP();

    }

}

var adventurerOBJ = {
    hpTotal: 15,
    health: 15,
    strength:2,
    speed:100,
    score: 0
}
var enemyOBJ;
//variable declarations

function updateCharHP() {
    $(currentHPText).html(adventurerOBJ.health);

}
function updateEnemyHP() {
    $(currentEnemyHPText).html(enemyOBJ.health);
}





encounter();


function encounter(){
    
    

    var enemyChoice = Math.floor(Math.random()*10);
    //Calls up the animation for the main character
    init()
    //Demon is the enemy
    if(enemyChoice > 7){
        enemyOBJ = {
            name: "Demon",
            hpTotal: 17,
            health:17,
            strength:4,
            speed: 110
        }

        $("#minotaurAnimationID").css("display","none");
        $("#adventurerAnimationID").css({
            'right':'0px',
            'left': '200px'
           });
           console.log("this is the demon init")
           demonInit();
    }
    //Minotaur is the enemy
    else{
        enemyOBJ = {
            name: "Minotaur",
            hpTotal: 15,
            health: 15,
            strength: 2,
            speed: 20,
        }

        $("#demonAnimationID").css("display","none");
        $("#adventurerAnimationID").css({
            'right':'0px',
            'left': '300px'
           });
           minInit();
           
    }
}

$("#attackCommand").on("click", function(){
    //Sees who goes first, than deals damage
    if(adventurerOBJ.speed > enemyOBJ.speed){
        adAnimation = 0;
        init();
        dealDamage();
        

        if(enemyOBJ.name =="Minotaur"){
            minAnimation = 0;
            setTimeout(minInit, 1000);
            setTimeout(takeDamage, 1000);
            
            

        }
        else{
            demonAnimation = 0;
            setTimeout(demonInit, 1000);
            
            

        }

    }
    //If the enemy is faster
    else{
        if(enemyOBJ.name =="Minotaur"){
            minAnimation = 0;
            minInit();

        }
        else{
            demonAnimation = 0;
            demonInit();

        }
        adAnimation = 0;
        setTimeout(init, 1000);
        
    
    }
    

});
$("#itemCommand").on("click", function(){
    //Brings up list of items

});
$("#runCommand").on("click", function(){
    //Runs a random chance to leave the battle but you lose your turn if you dont roll correctly

});
function damage(){

}
function ending(){

}
