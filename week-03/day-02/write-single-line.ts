'use strict';
export{};

const fs = require('fs');

const myString:string = 'Denes';

const myFileName:string = 'my-file.txt';

try{
  fs.writeFileSync(myFileName, myString, 'utf8');
  console.log(fs.readFileSync(myFileName, 'utf8'));
} catch(e){
  console.log(`Unable to write file: ${myFileName}`);
}