'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const triangleSize:number = 20;

//dynamic count
const counti:number =Math.floor(canvasSize/triangleSize);
let countj:number = counti;

//Random color generator
function randomColor(){
    const r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

//Triangle drawing function (coordinates of the middle point, the size of the sides, the color of the triangle)
function drawTriangle(xstart:number, ystart:number,size:number, color){
    //The coordinates of the triangle relative to the middle point
    const dinCoord: any[][] = [
        [xstart-size/2,ystart+size/4*Math.sqrt(3)],
        [xstart + size/2,ystart + size/4*Math.sqrt(3)],
        [xstart,ystart -size/4*Math.sqrt(3)]
       ];
    //Begin drawing the triangle, setting up, and moving to the fist coordinate
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(dinCoord[0][0],dinCoord[0][1]);
    //Drawing the remaining 2 sides, then closing path, and stroke it
    for (let i:number = 0; i<2; i++){
        ctx.lineTo(dinCoord[i+1][0],dinCoord[i+1][1]);
    } 
    ctx.closePath();
    ctx.stroke();
}
//set the color
const color:string = randomColor();
//starting coordinates
let startx:number = canvasSize/2-(counti/2-0.5)*triangleSize;
let starty:number = canvasSize/2+(counti/2-0.5)*triangleSize*Math.sqrt(3)/2;


//Drawing the big triangle using the smaller ones, the fist for loop counts the rows, the second one the "columns"
for (let i: number = 0; i<counti;i++){
    for (let j: number = 0; j<countj; j++){
        drawTriangle(startx + j*triangleSize, starty - i*(triangleSize*Math.sqrt(3)/2), triangleSize,color);
    }
    //move the lines to the right by one
    startx+=triangleSize/2;
    //draw one less triangle in the next row
    countj-=1;
}
