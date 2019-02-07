'use strict';

const path:string = './countchar.txt'

const mostCommonItem = (myArray) =>
  myArray.reduce(
    (a,b,i,arr)=>
     (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
    null)

const fs = require('fs');

try{
  if (fs.existsSync(path)){
    let myFile = fs.readFileSync(path, 'utf8');
    let myArr = myFile.split('').filter(value => value.search(/\s/) === -1);
  
    console.log(mostCommonItem(myArr));
  }
  else {throw new Error("File does not exist!");}
}
catch(e){
  console.log(e.message)
}