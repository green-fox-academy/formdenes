'use strict';

//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list



function substrlist (value:string, list: string[]){
    let foundString: string = '';
    foundString = (list.filter(str => {
        if (str.indexOf(value) !== -1){
            return value;
        }
    })[0]);
    return (list.indexOf(foundString));
    
}

//substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']);
//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`
