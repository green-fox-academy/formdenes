'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const seed:number = Math.floor(Math.random()*10000);

function pseudoRandomBig(x:number){
    let square:number = Number(Math.pow(x,2).toString().slice(1,-1));
    if (square.toString().length>12){
        return square;
    }
    else {return pseudoRandomBig(square);}
}
function pseudoRandom(num:number){
    return Number(`0.${pseudoRandomBig(num).toString()}`);
}

//Random color generator
function randomColor(colorSeed:number){
    const r = function (variation:number) { return Math.floor(pseudoRandom(colorSeed*variation)*256) };
    return "rgb(" + r(2334) + "," + r(6443) + "," + r(1343) + ")";
}

//Triangle drawing function (coordinates of the middle point, the size of the sides, the color of the triangle)
function drawTriangle(xstart:number, ystart:number,size:number, color){
    //The coordinates of the triangle relative to the middle point
    const m:number = size*Math.sqrt(3)/2;
    const dinCoord: any[][] = [
        [xstart-size/2,ystart+m/2],
        [xstart + size/2,ystart + m/2],
        [xstart,ystart -m/2]
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
    if (size>10){
        drawTriangle(xstart-size/4,ystart+m/4,size/2,randomColor(seed*size));
        drawTriangle(xstart,ystart-m/4,size/2,randomColor(seed*size));
        drawTriangle(xstart+size/4,ystart+m/4,size/2,randomColor(seed*size));
    }
}



drawTriangle(canvasSize/2,canvasSize/2,canvasSize,randomColor(seed));