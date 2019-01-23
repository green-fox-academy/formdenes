'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.



function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawSquareColor(a: number, color: string){
    ctx.fillStyle = color;
    ctx.fillRect(300-(a/2),200-(a/2),a,a);
}

//drawSquareColor(400,randomColor())

let diff:number = 20;

for (let i:number = 600; i>0; i -=diff){
    drawSquareColor(i,randomColor());
}