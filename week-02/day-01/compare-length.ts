'use strict';

let firsList: number [] = [1,2,3];
let secondList:number[] = [4,5];

function hasMoreElements (first: any[], second: any[]){
    if(first.length>second.length){
        return "The first has more elements"
    }else if (first.length === second.length){
        return "They have the same number of elements"
    }else{
        return "The second have more elements"};
}


console.log(hasMoreElements(firsList,secondList));