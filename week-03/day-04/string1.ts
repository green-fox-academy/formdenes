'use strict'

function stringCharChange(string:string, from:string, to:string){
    if (string.length<=1){
        if (string.charAt(0) == from){
            return to;
        }
        else {return string.charAt(0);}
    }
    else{
        if (string.charAt(0) == from){
            return to.concat(stringCharChange(string.slice(1), from, to));
        }
        else {return string.charAt(0).concat(stringCharChange(string.slice(1), from, to))}
    }
}

console.log(stringCharChange('This text is created for this exact purpose','x','y'));