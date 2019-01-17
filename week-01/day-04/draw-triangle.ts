'use strict';
export{};

let lineCount: number = 4;
let print: string = "";
for (let i: number = 1; i<= lineCount; i++){
    for (let j: number = 0; j<i; j++){
        print = print + '*';
    }
    console.log(print);
    print = "";
}