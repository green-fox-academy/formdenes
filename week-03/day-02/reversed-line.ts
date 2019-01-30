'use strict';
export{};

const fs = require('fs');
const myFile = fs.readFileSync('reversed-lines.txt', 'utf8');

function reverseLines(text:string){
  const originalLines = myFile.split('\n');
  let revText:string = '';
  originalLines.forEach(value => {
    let revTextLine:string = '';
    for (let i:number = value.length; i>0; i--){
      revTextLine+=value.charAt(i-1);
    }
    revTextLine+='\n';
    revText+=revTextLine;
  });
  return revText;
}

console.log(reverseLines(myFile));