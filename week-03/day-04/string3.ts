'use strict'

function stringCharRemove(string:string, char:string){
    if (string.length<=1){
        return string.charAt(0);
    }
    else{
        if (string.charAt(1) == ' '){
            return `${string.substr(0,2)}${stringCharRemove(string.slice(2),char)}`;    
        }
        else {
            return `${string.charAt(0)}${char}${stringCharRemove(string.slice(1),char)}`;
        }
    }
}

console.log(stringCharRemove('This text is created for this exact purpose','*'));