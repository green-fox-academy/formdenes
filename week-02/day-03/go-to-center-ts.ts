'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawLine(x1:number, y1:number){
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(300,200);
    ctx.stroke();
}

drawLine(0,0);
