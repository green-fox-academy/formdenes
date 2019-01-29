'use strict';
export{};

const fs = require('fs');

const myFile = fs.readFileSync('log.txt', 'utf8');

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function getIPAdresses(file:string){
  const arr = file.split('\n').map(value => value.split("   "));
  return arr.map(value => value[1]).filter(onlyUnique);
}

function getRatio(file:string){
  const arr = file.split('\n').map(value => value.split("   "));
  let ratioArray = arr.map(value => value[2]);
  let getCount:number = ratioArray.filter(value => value == "GET /").length;
  let postCount:number = ratioArray.filter(value => value == "POST /").length; 
  return `The GET / POST request ratio is: ${getCount/postCount}`;
}

console.log(getIPAdresses(myFile));
console.log(getRatio(myFile));

getIPAdresses(myFile).map(function(value){
 return value.split("   ");
})