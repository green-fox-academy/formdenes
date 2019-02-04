'use strict';

function isSymetric(matrix: number[][]){
  return matrix.map((arrv, index, arr) =>
    arrv.map((v, jindex, jarr) => {
      return v === arr[jindex][index] ? true : false;
    })   
  ).every(arrv => arrv.every(v => v === true));
}


const matrixOne:number[][] = [[1,0,1],[0,2,2],[1,2,5]];
const martrixTwo:number[][] = [[7,7,7],[6,5,7],[1,2,1]];

console.log(isSymetric(matrixOne));
console.log(isSymetric(martrixTwo));