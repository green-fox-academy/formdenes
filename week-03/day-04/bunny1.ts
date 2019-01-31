'use strict'

function bunnyEars(n:number){
    if (n<1){
        return  0;
    }
    else {
        return 2+bunnyEars(n-1);}
}

console.log(bunnyEars(40));