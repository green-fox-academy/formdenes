'use strict';
export{};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawLine(x1:number, y1:number, x2:number, y2:number, color: string){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function drawBox(x: number, y:number, width: number, height: number){
    drawLine(x,y,x+width, y, randomColor());
    drawLine(x+width,y,x+width, y+height, randomColor());
    drawLine(x+width, y+height, x, y+height, randomColor());
    drawLine(x, y+height, x, y, randomColor());
}
drawBox(100,100, 200, 200);
