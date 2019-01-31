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

//Circle drawing function (coordinates of the middle point, the size of the sides, the color of the circle)
function drawCircle(xstart:number, ystart:number,radius:number, color){
    //Begin drawing the circle, setting up, and moving to the fist coordinate
    ctx.strokeStyle = color;
    ctx.beginPath();
    //Drawing the remaining 2 sides, then closing path, and stroke it
    ctx.arc(xstart, ystart, radius, 0, 2*Math.PI);
    ctx.stroke();
    if (radius>10){
        drawCircle(xstart-radius*Math.sqrt(3)/4,ystart+radius/4,radius/2,randomColor(seed*radius));
        drawCircle(xstart,ystart-radius/2,radius/2,randomColor(seed*radius));
        drawCircle(xstart+radius*Math.sqrt(3)/4,ystart+radius/4,radius/2,randomColor(seed*radius));
    }
}



drawCircle(canvasSize/2,canvasSize/2,canvasSize/2,randomColor(seed));