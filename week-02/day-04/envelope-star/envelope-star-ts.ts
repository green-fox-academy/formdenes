'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const div: number = 2;
const width:number = canvasSize/div;

//dynamic density
let lineCount:number =Math.max( 600/(div*10),10);

//Random color function
function randomColor(){
    const r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

//Line drawing function
function drawLine(x1:number, y1:number, x2:number, y2:number, color: string){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

//Start drawing function
function envStar(size: number, density:number, color:string){
    for (let i: number = 0; i<4; i++){
        let evens: number = i%2;
        let sign:number = Math.sign(1.5-i);
        for (let j: number = 0;j<=density; j++){
            let xstart:number = evens*size+(1-evens)*j*size/density;
            let ystart:number = (1-sign*evens)*size+sign*evens*j*size/density;
            let xend:number = size+evens*j*size/density;
            let yend:number = size-sign*(1-evens)*j*size/density;
            drawLine(xstart, ystart, xend, yend,color);
        }
    }
}

//Do the things
envStar(width,lineCount,randomColor());

