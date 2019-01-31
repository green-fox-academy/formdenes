'use strict'

function bunnyEars(n:number){
    if (n<1){
        return  0;
    }
    else {
        return (n%2)*2+(1-n%2)*3+bunnyEars(n-1);}
}

console.log(bunnyEars(6));