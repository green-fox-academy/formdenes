'use strict';



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawSquare(a: number){
    ctx.fillStyle = randomColor();
    ctx.fillRect(300-(a/2),200-(a/2),a,a);
}

for (let i:number = 0; i<3; i++){
    drawSquare(Math.random()*200);
}