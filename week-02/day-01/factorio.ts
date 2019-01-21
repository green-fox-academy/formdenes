'use strict';

function factorio (n:number){

    if (n<=0){
        return 1;
    }
    else {
        return (n * factorio(n-1));
    }

}
console.log(factorio(3));