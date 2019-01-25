'use strict'

const line0:number [] = [];
const line1:number [] = [2,1,3,1,2];
const line2:number [] = [3,2,4,1,5,1,4,2,3];
const line3:number [] = [4,3,5,2,6,1,7,1,6,2,5,3,4];

console.log('line0' + line0);
console.log('line1' + line1);
console.log('line2' + line2);
console.log('line3' + line3);

let even:number;
let odd:number;
let allow:number;
let deny:number;
let increase:number;
let decrease:number;

let generatedLine:number[];


/* for (let i:number = 0; i<4;i++){
    even = 1-i%2;
    odd = i%2;
    allow = i+1;
    deny = i;
    increase = Math.floor((i+1)*2/(4*i+1));
    console.log(increase);
    for (let j:number = 0; j<4*i+1; j++){
        even;
    }
} */


//The objective is to create a loop tha print out numbers like this
//0 => 1
//1 => 2,3,2
//2 => 3,4,5,4,3
//3 => 4,5,6,7,6,5,4,3

//inner loop counts i*2+1 = jmax (odd numbers)
//numbers start from i+1
//they increment till round(jmax/2) then decrement

let num: number = 0;
let arr: number[] = [];
let jmax:number = 0;


for (let i:number = 0; i<9; i++){
    jmax = i*2+1;
    num = i+1;
    for (let j:number = 0; j<jmax; j++){
        increase = Math.floor(j/(Math.round(jmax/2)));
        decrease = 1-increase;
        //console.log(`(${i}, ${j}) increase: ${increase}, decrease: ${decrease}, num: ${num}, jmax: ${jmax}`);
        arr.push(num + decrease*j+ increase*(jmax-j-1));      
    }
    console.log(arr);
    arr = [];
}

console.log