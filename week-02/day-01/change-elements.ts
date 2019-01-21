'use strict';

let numList: number[] = [1,2,3,8,5,6];
let changedList: number[] = numList.map(function(num:number){
    if (num === 8){return 4;}
    else return num;
})

console.log(changedList);