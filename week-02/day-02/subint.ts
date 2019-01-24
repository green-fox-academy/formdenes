'use strict';


function subint (value:number, list: number[]){
    let foundNumbers:number[] = list.filter(numb => numb.toString().indexOf(value.toString())!==-1);
    return foundNumbers.map(num => list.indexOf(num));
    
}

console.log(subint(1, [1, 11, 34, 52, 61]));
console.log(subint(9, [1, 11, 34, 52, 61]));

