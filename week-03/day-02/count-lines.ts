'use strict';
export{};

const fs = require('fs');


try{
  const myFileName:string = 'my-file.txt';
  let myFile = fs.readFileSync(myFileName, 'utf8');

  
  console.log(myFile.split('\n').length);
} catch(e){
  console.log(0);
}




