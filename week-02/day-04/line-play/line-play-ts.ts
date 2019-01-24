'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

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

let lineCount:number = 30;

for (let i: number = 0; i<2; i++){
    let color: string = randomColor();
    for (let j: number = 0;j<lineCount; j++){
        drawLine(i*j*(600/lineCount),(1-i)*j*(600/lineCount),(1-i)*j*(600/lineCount)+(i*600),(i)*j*(600/lineCount)+((1-i)*600),color);
    }
}
