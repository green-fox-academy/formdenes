'use strict';
export{};

const fs = require('fs');
const myFile = fs.readFileSync('encoded.txt', 'utf-8');

function decrypt(text:string){
  let unicodeChars = [];
  for (let i:number = 0; i<text.length; i++){
    unicodeChars.push(text.charCodeAt(i));
  }
  let fixedUnicodeChars = unicodeChars.map(value => {
    if (value===32 || value === 10){
      return value;
    }
    else {
      return value-1;
    }
    });
  let fixedChars = fixedUnicodeChars.map(value => String.fromCharCode(value));
  let fixedText = fixedChars.join('');
  return fixedText;
}
console.log(decrypt(myFile));