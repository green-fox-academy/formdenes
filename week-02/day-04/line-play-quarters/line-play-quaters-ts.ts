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

function drawP(startx:number, starty:number, size: number, density:number, color:string[]){
    for (let i: number = 0; i<2; i++){
        for (let j: number = 0;j<density; j++){
            drawLine(i*j*(size/density)+startx,(1-i)*j*(size/density)+starty,(1-i)*j*(size/density)+(i*size)+startx,(i)*j*(size/density)+((1-i)*size)+starty,color[i]);
        }
    }
}

//const values
const canvasSize:number = 900;
const div: number = 30;
const width:number = canvasSize/div;

//dynamic density
let lineCount:number =Math.max( 600/(div*10),10);

//Setting up the two colors
let colors:string[] = ['',''];
colors = colors.map(str => randomColor());

//Drawings
for(let rows:number = 0;rows<div;rows++){
    for (let columns:number = 0; columns<div; columns++){
        drawP(columns*width, rows*width, width, lineCount, colors);
    }
}