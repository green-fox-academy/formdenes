'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


let lineLength:number = 10;
let squareSize:number = 10;
let k:number = 5;

function drawSquare(x: number, y:number, size:number, contourColor:string, fillColor: string){
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = contourColor;
    ctx.fillRect(x,y,size,size);
    ctx.strokeRect(x,y,size,size);

}

let start:number = 0;

for (let i:number = 0; i<lineLength;i++){
    squareSize = squareSize + k;
    drawSquare(start,start,squareSize,"indigo", 'mediumorchid');
    start += squareSize;
}