'use strict';
export{};

const fs = require('fs');
const myFile = fs.readFileSync('lottery-temp2.txt', 'utf8');
const logArr = myFile.split('\n');
const logArrArr = logArr.map(value => value.split(';'));
const numbersArr = logArrArr.map(value => value.splice(value.length-5,5));
let numbers = [];
numbersArr.forEach(value => value.forEach(value => numbers.push(value)));
const numbersSorted = numbers.sort((num1, num2) => num1 - num2);
const mostCommonItem = (myArray) =>
  myArray.reduce(
    (a,b,i,arr)=>
     (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
    null)
const mostCommonItems = (myArr, quantity) => {
  let items = [];
  for (let i:number = 0; i<quantity; i++){
    items.push(mostCommonItem(myArr));
    myArr = myArr.filter(value => value !== items [i]);
  }
  return items;
}
console.log(mostCommonItems(numbers,5));