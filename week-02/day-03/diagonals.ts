'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(600,200);
ctx.stroke();

function drawLine(x1:number, y1:number, x2:number, y2:number, color: string){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

drawLine(0,0,600,400,'green');
drawLine(600,0,0,400,'red');