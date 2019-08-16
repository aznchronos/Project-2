// let img = new Image();
// img.src = '../images/AdSprite.png';


// img.onload = function() {
//     init();

// }

// let canvas = document.getElementById("characterAnimation");
// let ctx = canvas.getContext('2d');

// const scale = 5;
// const width = 50;
// const height = 37;
// const scaledWidth = width*scale;
// const scaledHeight = height*scale;

// function init(){
//     window.requestAnimationFrame(step);
// }

// const cycleLoop = [1,2,3,4,5,6]
// let currentLoopIndex = 0;
// let frameCount = 0;


// function step(){

//     frameCount++;
//     if (frameCount < 6) {
//       window.requestAnimationFrame(step);
//       return;
//     }
//     frameCount = 0;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawFrame(cycleLoop[currentLoopIndex], 1, 0, 0);
//     currentLoopIndex++;
//     if (currentLoopIndex >= cycleLoop.length) {
//       currentLoopIndex = 0;
//     }
//     window.requestAnimationFrame(step);
// }


// function drawFrame(frameX, frameY, canvasX, canvasY) {
//     ctx.drawImage(img,
//                   frameX * width, frameY * height, width, height,
//                   canvasX, canvasY, scaledWidth, scaledHeight);
//   }