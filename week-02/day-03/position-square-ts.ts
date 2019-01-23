'use strict';
export{};

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


function drawSquare50(x:number, y:number){
    let width: number = 50;
    let height: number = 50;
    ctx.fillStyle = randomColor();
    ctx.fillRect(x,y,width,height);
}

for (let i:number = 0; i<3; i++){
    drawSquare50(Math.min(Math.random()*600,600-50),Math.min(Math.random()*400,400-50));
}