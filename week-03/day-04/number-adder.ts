'use strict'
export{};

function adder(n:number ){
    if (n<=0){
        return 0;
    }
    else {return n+adder(n-1);}
}

console.log(adder(8));