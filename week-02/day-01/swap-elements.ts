'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];

function swap (array: any[], a:number, b: number){
    if (a<=b){
    array.splice(a,0,array[b-1]);
    array.splice(b,1, array[a-1]);
    array.splice(a-1, 2, array[a]);
    }
    else {
        array.splice(b,0,array[a-1]);
        array.splice(a,1, array[b-1]);
        array.splice(b-1, 2, array[b]);
    }
    return array;
}
console.log(swap(abc, 3, 1));