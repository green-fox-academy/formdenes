'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const hexagoneSize:number = 50;
const circleCount:number = 4;

//dynamic values
const counti:number =Math.floor(canvasSize/hexagoneSize);
let countj:number = counti;

//Random color generator
function randomColor(){
    const r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

//Hexagon drawing function (coordinates of the middle point, the size of the sides, the color of the hexagon)
function drawHexagon(xstart:number, ystart:number,size:number, color){
    //the height of one triangle inside of the hexagon
    const m:number = Math.sqrt(3)/2*size;
    //The coordinates of the hexagon relative to the middle point
    const dinCoord: any[][] = [
        [xstart-size/2,ystart+m],
        [xstart + size/2,ystart + m],
        [xstart + size,ystart],
        [xstart + size/2,ystart-m],
        [xstart - size/2,ystart - m],
        [xstart - size,ystart],
       ];
    //Begin drawing the hexagon, setting up, and moving to the fist coordinate
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(dinCoord[0][0],dinCoord[0][1]);
    //Drawing the remaining 2 sides, then closing path, and stroke it
    for (let i:number = 0; i<dinCoord.length-1; i++){
        ctx.lineTo(dinCoord[i+1][0],dinCoord[i+1][1]);
    } 
    ctx.closePath();
    ctx.stroke();
}

//Creating array which tell me, how many hexagones do I have to print in every columns
const max = circleCount*2+1;
const startingNum = circleCount+1;
let columnArray: number[] = [];
let decrease:number = 0;
let increase:number = 0;
for (let i:number = 0; i<max; i++){
    decrease = Math.floor(i/(Math.round(max/2)));
    increase = 1-decrease;
    columnArray.push(startingNum + increase*i+ decrease*(max-i-1));      
}

//set the color
const color:string = randomColor();

for (let column:number = 0; column<=columnArray.length; column++){
    for (let row:number= 0; row<columnArray[column];row++){
        drawHexagon(450-1.5*hexagoneSize*circleCount+1.5*column*hexagoneSize,450-Math.sqrt(3)/2*hexagoneSize+Math.sqrt(3)/2*hexagoneSize*columnArray[column]-2*Math.sqrt(3)/2*hexagoneSize*row,hexagoneSize,color);
    }
}

