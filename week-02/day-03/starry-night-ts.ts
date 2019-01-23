'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function randomColor(){
    let r = Math.floor(Math.random()*256);
    return "rgb(" + r + "," + r + "," + r + ")";
}

function drawSquareColor(x1:number, y1:number, a: number, color: string){
    ctx.fillStyle = color;
    ctx.fillRect(x1,y1,a,a);
}

function drawStar(x1:number, y1:number, a: number, color: string){
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    //The middle part (circle)
    ctx.beginPath();
    ctx.arc(x1,y1,a,0,Math.PI*2);
    ctx.stroke();
    ctx.fill();
    //Horizontal line
    ctx.beginPath();
    ctx.moveTo(x1,y1-a*2);
    ctx.lineTo(x1,y1+a*2);
    ctx.stroke();
    //Vertical line
    ctx.beginPath();
    ctx.moveTo(x1-a*2,y1);
    ctx.lineTo(x1+a*2,y1);
    ctx.stroke();
}



//Size of the stars
let starSize:number = 2;
//Number of stars
let starNumber:number = 200;

//Draw the sky

drawSquareColor(0,0,600,'black');

for (let i:number = 0; i<starNumber; i++){
    drawStar(Math.min(Math.random()*600,600-starSize),Math.min(Math.random()*400,400-starSize),starSize,randomColor());
}