'use strict'

export function fibonacci(n:number){
    if (n<1){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    else {return fibonacci(n-1)+fibonacci(n-2);}
}


console.log(fibonacci(7));