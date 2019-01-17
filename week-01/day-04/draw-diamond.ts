'use strict';
export{};

let lineCount: number = 7;
let print: string = "";
for (let i: number = 1; i<= lineCount; i++){
    if (i <= Math.round(lineCount / 2)){
        for(let j: number = 0; j<Math.round(lineCount / 2)-i; j++){
        print = print + ' ';
        }
        for (let j: number = 0; j<2*(i-1)+1; j++){
            print = print + '*';
        }
    }
    else {
        for(let j: number = 0; j<i-Math.round(lineCount / 2); j++){
        print = print + ' ';
        }
        for (let j: number = 0; j<2*(lineCount-i)+1; j++){
            print = print + '*';
        }
    }
    console.log(print);
    print = "";
}