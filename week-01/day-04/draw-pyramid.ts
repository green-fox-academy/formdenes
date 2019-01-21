'use strict';
export{};

let lineCount: number = 4;
let print: string = "";
for (let i: number = 1; i<= lineCount; i++){
    for(let j: number = 0; j<lineCount-i; j++){
        print = print + ' ';
    } 
    for (let j: number = 0; j<2*(i-1)+1; j++){
        print = print + '*';
    }
    console.log(print);
    print = "";
}
