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
  

function drawSquare(a: number, x:number, y:number, color:string){
    ctx.fillStyle = 'white';
    ctx.strokeStyle = color;
    ctx.lineWidth = a*0.08;
    ctx.strokeRect(x-a/2,y-a/2,a,a);
    if (a>40){
        drawSquare(a/2,x+a/2,y+a/2,randomColor(seed*a));
        drawSquare(a/2,x+a/2,y-a/2,randomColor(seed*a));
        drawSquare(a/2,x-a/2,y+a/2,randomColor(seed*a));
        drawSquare(a/2,x-a/2,y-a/2,randomColor(seed*a));
    }
}

drawSquare(400, 450, 450, randomColor(seed));

//drawHexagon(canvasSize/2,canvasSize/2,canvasSize/2,randomColor(seed));