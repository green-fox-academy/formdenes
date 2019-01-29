'use strict';
export{};

const fs = require('fs');

const lineCount: number = 5;
const myString:string = 'alma';
const myFileName:string = 'my-file.txt';

function writeMultipleLines(path:string, word:string, lines:number){
  try{
    fs.writeFileSync(path, word, 'utf8');
    for (let i:number = 0; i<lines-1; i++){
      fs.appendFileSync(path, `\n${word}`, 'utf8')
    }
    console.log(fs.readFileSync(path, 'utf8'));
  } catch(e){e}
}

writeMultipleLines(myFileName, myString, lineCount);