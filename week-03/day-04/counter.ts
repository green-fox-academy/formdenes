'use strict'
export{};

function counter(n:number ){
    if (n<=0){
        return 0;
    }
    else {
        console.log(n);
        return counter(n-1);
    }
}

console.log(counter(8));