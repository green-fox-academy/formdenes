'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//const values
const canvasSize:number = 900;
const originalSize:number = 700;
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

//Converts radian to degrees
function degrees (radians:number){
    return radians * 180 / Math.PI;
}

//kochline drawing function (coordinates of the middle point, the size, the angle it faces, the color of the kochline)
function drawKoch(xstart:number, ystart:number,size:number,angle:number , color){
    //Begin drawing the line, setting up, and moving to the fist coordinate

    let x1:number = xstart;
    let y1:number = ystart;
    let x2:number = 0;
    let y2:number = 0;
    let xend:number = Math.sin(angle)*size;
    let yend:number = Math.cos(angle)*size;

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(xstart + xend,ystart - yend);
    ctx.stroke();
    
    if (size>5){
        x1 = xstart + xend/3;
        y1 = ystart - yend/3;
        x2 = xstart + xend/3*2;
        y2 = ystart - yend/3*2;

        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x1 + Math.sin(angle-Math.PI/3)*size/3,y1-Math.cos(angle-Math.PI/3)*size/3);
        ctx.lineTo(x2,y2);
        ctx.stroke();

        drawKoch(xstart,ystart,size/3,angle,color);
        drawKoch(x2,y2,size/3,angle, color);
        drawKoch(x1,y1,size/3, angle+5*Math.PI/3, color);
        drawKoch(x1 + Math.sin(angle-Math.PI/3)*size/3,y1-Math.cos(angle-Math.PI/3)*size/3,size/3, angle+Math.PI/3, color);
    }
}



drawKoch((canvasSize-originalSize)/2, canvasSize/2-originalSize*Math.sqrt(3)/2/3,originalSize,Math.PI/2,'black');
drawKoch(canvasSize-(canvasSize-originalSize)/2,canvasSize/2-originalSize*Math.sqrt(3)/2/3, originalSize,Math.PI/6*7,'black');
drawKoch(canvasSize/2,canvasSize/2+originalSize*Math.sqrt(3)/3, originalSize,-Math.PI/6,'black');