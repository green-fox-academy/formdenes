'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const hexagoneSize:number = 30;
const circleCount:number = 8;

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
    let x:number = 0;
    let y:number = 0;
    let a:number = 0;
    let b:number = 0;
    let c:number = 0;
    let d:number = 0;
    let even:number = 0;
    let odd:number = 0;
    
    //Begin drawing the hexagon, setting up, and moving to the fist coordinate
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(xstart-size/2, ystart + m);

    //Drawing the remaining 2 sides, then closing path, and stroke it
    for (let i:number = 0; i<6; i++){
        even = 1-i%2;
        odd = i%2;
        a = even*(-1)+odd*1;
        b = Math.floor(i%3/2)*(-1)+1+Math.floor(i%3/2)*(-2);
        c = 1-Math.floor(i/3)-(Math.floor(i/3));
        d = 1-Math.floor(i%3/2);
        x = xstart + a*b*size/2;
        y = ystart + c*d*m;
        console.log(`(${x},${y})`);
        ctx.lineTo(x,y);
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

