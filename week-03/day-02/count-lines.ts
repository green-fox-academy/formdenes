'use strict';
export{};

const fs = require('fs');

const myFileName:string = 'my-file.txt';

try{
  let myFile = fs.readFileSync(myFileName, 'utf8');

  
  console.log(myFile.split('\n').length);
} catch(e){
  console.log(0);
}




