'use strict'

function powerN(base:number, power:number){
    if (base<1){
        return 'Wrong base';
    }
    else if (power<1){
        return 1;
    }
    else {
        return base*powerN(base,power-1);
    }
}

console.log(powerN(2,10));