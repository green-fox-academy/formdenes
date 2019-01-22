'use strict';
//export{};
/* 
let size: number = 4;
let array: any[] = [];
let arrayRow:number[] = new Array(size).fill('');
//let print: string = "";

array.fill(0,0,size);
arrayRow.fill(0,0, size); 




for (let i: number = 0; i < size; i++){ //rows
    for(let j: number = 0; j < size; j++){ //columns
        if (i+j===size-1){
            arrayRow.splice(j,1,1)
        }
        else {arrayRow.splice(j,1,0);
        }        
    }
    array.splice(i, 1, arrayRow);
    console.log(array[i]);
} */

let size: number = 10;
let matrix: any[][] = [];

for (let i = 0; i<size; i++){
    matrix[i] = [];
    for (let j = 0; j<size; j++){
        if (i+j === size-1){
            matrix[i][j] = 1;
        }
        else {matrix[i][j] = 0;}
        
    }
    console.log(matrix[i]);
}
