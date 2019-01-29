'use strict';
export{};

const fs = require('fs');

let myFile = fs.readFileSync('my-file.txt', 'utf8');

myFile.split('\n').forEach(value => console.log(value));