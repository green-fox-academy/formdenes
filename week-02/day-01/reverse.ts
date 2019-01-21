'use strict';
export{};

let numList: number[] = [3,4,5,6,7];

let reverseListBuiltIn: number[] = numList.reverse();

let reverseListMine: number[] = [];
//let temp: number[];

for (let i: number = 0; i<numList.length; i++){
    reverseListMine[i] = numList[numList.length-1-i];
}

console.log(reverseListBuiltIn);
console.log(reverseListMine);
