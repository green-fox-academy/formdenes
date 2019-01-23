'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawLine(x1:number, y1:number){
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x1 + 50,y1);
    ctx.stroke();
}

drawLine(Math.random()*600,Math.random()*400);