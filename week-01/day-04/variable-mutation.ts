'use strict';
export{};

let a: number = 3;
a += 10;
console.log(a);

let b: number = 100;
b -= 7;
console.log(b);

let c: number = 44;
c *= 2;
console.log(c);

let d: number = 125;
d /= 5;
console.log(d);

let e: number = 8;
e = Math.pow(e,2);
console.log(e);

let f1: number = 123;
let f2: number = 345;
if (f1 > f2){
    console.log(true);
}
else {
    console.log(false);
}

let g1: number = 350;
let g2: number = 200;
if (2 * g2 > g1){
    console.log(true);
}
else {
    console.log(false);
}

let h: number = 1357988018575474;
if (h % 11 == 0){
    console.log(true);
}
else {
    console.log(false);
}

let i1: number = 10;
let i2: number = 3;
if (i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3)){
    console.log(true);
}
else {
    console.log(false);
}

let j: number = 1521;
if (j % 3 == 0 || j % 5 == 0){
    console.log(true);
}
else {
    console.log(false);
}

let k: string = 'Apple';
k = k + k + k + k;
console.log(k);
