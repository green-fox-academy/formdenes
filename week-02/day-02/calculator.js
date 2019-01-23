'use strict';

let operation = (process.argv[2]);
let operand = process.argv.splice(3,2).map(value => {return Number(value);});

function doTheMath(oper, opOne, opTwo) {
    let out;
     switch (oper){
        case "+":
            out = opOne + opTwo;
            break;
        case '-':
            out = opOne - opTwo;
            break;
        case '*':
            out = opOne * opTwo;
            break;
        case '/':
            out = opOne / opTwo;
            break;
        case '%':
            out = opOne % opTwo;
            break;
        default:
            out = "Please follow the rules!"
            break;
     }
     return out;
}

console.log("The operation is: "  + operation);
console.log("The operands are: " + operand);

if (operation === undefined || !isNaN(Number(operation))){
    console.log('Please follow the rules!');
}
else{
    console.log('The result is: ' + doTheMath(operation, operand[0],operand[1]));
    console.log("Goodby!");
}
