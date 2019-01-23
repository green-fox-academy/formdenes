'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let boxPoints:any[] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let otherPoints:any[] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];



function connectDots(dotList:any[]){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(dotList[0][0],dotList[0][1]);
    dotList.forEach(coord => ctx.lineTo(coord[0],coord[1]));
    ctx.lineTo(dotList[0][0],dotList[0][1]);
    ctx.stroke();
}

connectDots(boxPoints);
connectDots(otherPoints);

