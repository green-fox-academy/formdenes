'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function drawSquare(x: number, y:number, size:number, contourColor:string, fillColor: string){
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = contourColor;
    ctx.fillRect(x,y,size,size);
    ctx.strokeRect(x,y,size,size);

}
let tileSize:number = 50;

for (let i:number = 0; i<8;i++){
    for (let j:number = 0; j<4; j++){
        
        drawSquare((j+(i+1)%2/2)*2*tileSize,i*tileSize,tileSize,"black", 'black');

    }
}