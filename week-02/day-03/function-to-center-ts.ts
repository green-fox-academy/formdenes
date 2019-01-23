'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawLine(x1:number, y1:number){
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(300,200);
    ctx.stroke();
}

for (let i:number = 0; i<2;i++){

    for (let j:number = 0; j<600; j+= 20){
        drawLine(j,i*400);
    }

}
for (let i:number = 0; i<2;i++){

    for (let j:number = 0; j<400; j+= 20){
        drawLine(i*600,j);
    }

}