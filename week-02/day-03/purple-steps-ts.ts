'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let lineLength:number = 20;
let squareSize:number = 15;

function drawSquare(x: number, y:number, size:number, contourColor:string, fillColor: string){
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = contourColor;
    ctx.fillRect(x,y,size,size);
    ctx.strokeRect(x,y,size,size);

}


for (let i:number = 0; i<lineLength;i++){
    drawSquare(i*squareSize,i*squareSize,squareSize,"indigo", 'mediumorchid');
}