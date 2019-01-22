'use strict';
export{};

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(something:string) {
    let revSomething: string = '';
    for (let i: number = 0; i<something.length; i++){
        revSomething = revSomething.concat(something.charAt(something.length-1-i));

    }
    return revSomething;
}

console.log(reverse(reversed));