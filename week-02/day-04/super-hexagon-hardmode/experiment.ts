'use strict'
export{};

const line0:number[] = [-1,1,-1,1,-1,1];
const line1:number[] = [1,1,-2,1,1,-2];
const line2:number[] = [1,1,1,-1,-1,-1];
const line3:number[] = [1,1,0,1,1,0];

console.log(`The first thingie: ${line0}`);
console.log(`The first thingie: ${line1}`);
console.log(`The first thingie: ${line2}`);
console.log(`The first thingie: ${line3}`);

let even: number;
let odd: number;

let results:number[][]=[[],[],[],[]];


for (let i:number = 0;i<6;i++){
    even = 1-i%2;
    odd = i%2;
    results[0].push(even*(-1)+odd*1);
    results[1].push(Math.floor(i%3/2)*(-1)+1+Math.floor(i%3/2)*(-2));
    results[2].push((1-Math.floor(i/3))-(Math.floor(i/3)));
    results[3].push(1-Math.floor(i%3/2));
}
for (let i:number = 0; i<6; i++){
    console.log(`x: ${results[0][i]*results[1][i]}, y: ${results[2][i]*results[3][i]}`)
}