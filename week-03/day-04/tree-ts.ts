'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const originalSize:number = 60;
const originalAngle:number = Math.PI/8;
const originalQ:number = 0.95;
const limit:number = 40;
const seed:number = Math.floor(Math.random()*10000);

//Random color generator
function randomColor(){
    const r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}
ctx.lineWidth = 2;
//kochline drawing function (coordinates of the middle point, the size, the angle it faces, the color of the kochline)
function drawTree(xstart:number, ystart:number,size:number,q:number, angle:number , color){
    //Begin drawing the line, setting up, and moving to the fist coordinate
    let x1:number = xstart;
    let y1:number = ystart;
    let xend:number = Math.sin(angle)*size;
    let yend:number = Math.cos(angle)*size;
    let n:number = Math.log(size/originalSize)/Math.log(q);
    console.log(n);

    ctx.lineWidth = 2*Math.pow(q,n);
    ctx.globalAlpha = 1*Math.pow(q-0.2,n);
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(xstart + xend,ystart - yend);
    ctx.stroke();
    
    if (size>limit){
        drawTree(xstart + xend,ystart-yend,size*q,q,angle,color);
        drawTree(xstart + xend,ystart-yend,size*q,q,angle-originalAngle,color);
        drawTree(xstart + xend,ystart-yend,size*q,q,angle+originalAngle,color);
    }
}

ctx.fillStyle = 'blue';
ctx.fillRect(0,0,canvasSize,canvasSize);


drawTree((canvasSize)/2, canvasSize-50,originalSize,originalQ,0,'yellow');