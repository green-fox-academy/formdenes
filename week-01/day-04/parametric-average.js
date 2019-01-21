'use strict';

let numbers = [];
let quantity;
let firstInput = Number(process.argv[2]);
let sum = 0;
let average = 0;
/*
if (Number(process.argv[2])!==Number(process.argv[2])){
console.log(Number(process.argv[2]));
}
*/
//goes trough the inputs, after the 2 beginning one
//the max inputs are 100

for (let i = 2; i<=100; i++){
    //if there is no input or the first one is wrong, asks for numbers.
    if (process.argv[2] === undefined || firstInput !== firstInput){
        console.log("Please provide some numbers");
        break;
    }
    //if there is input in index, store it
    else if (process.argv[i]!==undefined){
        //only store it, if its a number
        if (!(Number(process.argv[i]) !== Number(process.argv[i]))){
            numbers[i-2]=Number(process.argv[i]);
            //console.log(numbers[i-2]);
        }
        //if its not a number, dont go any further
        else{
            quantity = i-2;
            console.log("You typed in " + quantity + " numbers.");
            break;
        }
    }
    //if there is no input, dont go any further
    else {
        quantity = i-2;
        console.log("You typed in " + quantity + " numbers.");
        break;
    }
}
//console.log(quantity);
//Sum
for (let i = 0; i<quantity;i++){
    //console.log(numbers[i]);
    sum += numbers[i];
    //sum += 1;
}
//console.log('string');
//console.log(43);    
console.log("Sum: " + sum);

//Average
average=sum/quantity;
console.log("Average: " + average);