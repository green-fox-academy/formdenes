'use strict';
export{};

let lineCount: number = 6;
let print: string = '';

for (let i: number = 0; i<lineCount; i++){
    //Top and bottom
    if (i === 0 || i === lineCount-1){
        for (let j: number = 0; j<lineCount; j++){
            print += "%";
        }
    }
    //The sides and diagonal
    else {
        for (let j: number = 0; j< lineCount; j++){
            if (j === 0 || j === lineCount-1 || j===i){
                print += "%";
            }
            else {
                print += " ";
            }
        }
    }
    console.log(print);
    print = "";
}