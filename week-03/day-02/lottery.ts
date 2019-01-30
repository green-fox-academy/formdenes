'use strict';
export{};

const fs = require('fs');
const myFile = fs.readFileSync('encoded.txt', 'csv');

console.log(myFile.split('\n'));