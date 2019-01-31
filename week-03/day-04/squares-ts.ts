'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function drawSquare(a: number, x:number, y:number, color:string){
    ctx.fillStyle = randomColor();
    ctx.strokeStyle = 'black';
    ctx.fillRect(x,y,a,a);
    ctx.strokeRect(x,y,a,a);
    if (a>10){
        drawSquare(a/3,x+a/3,y,color);
        drawSquare(a/3,x+a/3,y+2*a/3,color);
        drawSquare(a/3,x,y+a/3,color);
        drawSquare(a/3,x+2*a/3,y+a/3,color);
    }
}

drawSquare(900, 0, 0, randomColor());