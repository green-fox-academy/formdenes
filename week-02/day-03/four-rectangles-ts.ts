'use strict';
export{};


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

let width: number = 0;
let height: number = 0;

for (let i:number = 0;i<4;i++){
    width = Math.random()*300;
    height = Math.random()*200;
    ctx.fillStyle = randomColor();
    ctx.fillRect(Math.random()*(600-width),Math.random()*(400-height),width,height);
}