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
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
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
        ctx.lineTo(x,y);
    } 
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    if (size>5){
        drawHexagon(xstart-size/3,ystart+m/3*2,size/3,randomColor(seed*size));
        drawHexagon(xstart+size/3,ystart+m/3*2,size/3,randomColor(seed*size));
        drawHexagon(xstart+size/3*2,ystart,size/3,randomColor(seed*size));
        drawHexagon(xstart+size/3,ystart-m/3*2,size/3,randomColor(seed*size));
        drawHexagon(xstart-size/3,ystart-m/3*2,size/3,randomColor(seed*size));
        drawHexagon(xstart-size/3*2,ystart,size/3,randomColor(seed*size));
    }
}




drawHexagon(canvasSize/2,canvasSize/2,canvasSize/2,randomColor(seed));