'use strict';
export{};

const fs = require('fs');

const fromFileName:string = 'my-file.txt';
const toFileName:string = 'my-file-copy.txt'

function copyFile(from:string, to:string){
  fs.writeFileSync(to, fs.readFileSync(from,'utf8'), 'utf8');

}

try{
  copyFile(fromFileName,toFileName);
  console.log(true);
  console.log(fs.readFileSync(toFileName, 'utf8'));
} catch(e){
  console.log(false);
}