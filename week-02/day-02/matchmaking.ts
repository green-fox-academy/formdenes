'use strict';
export{};
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (array1:string[], array2:string[]){
    let out: string[] = [];
    let listLength: number = 0;
    if (girls.length<boys.length){
         listLength = boys.length;
    }
    else {listLength = girls.length;}

    for(let i: number = 0; i<listLength; i++){
        if(typeof girls[i] == "string"){
            out.push(girls[i]);
        }
        if(typeof boys[i] == "string"){
            out.push(boys[i]);
        }
    }
    return out;
}

//console.log(typeof girls[girls.length]);

console.log(makingMatches(girls, boys));
