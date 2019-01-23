'use strict';
export{};


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = "green";
ctx.fillRect(300-5,200-5,10,10);

function randomColor(){
    let r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}



function drawRect(x:number, y:number, width:number, height:number, color:string){
    
}