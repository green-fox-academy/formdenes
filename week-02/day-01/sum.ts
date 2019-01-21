'use strict';

function sum(max:number){
    let s:number = 0;
    for (let i = 0; i<max;i++){
        s+=i+1;
    }
    return s;
}

console.log(sum(5));
