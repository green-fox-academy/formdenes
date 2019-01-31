'use strict'

function stringCharRemove(string:string, what:string){
    if (string.length<=1){
        if (string.charAt(0) == what){
            return '';
        }
        else {return string.charAt(0);}
    }
    else{
        if (string.charAt(0) == what){
            return ''.concat(stringCharRemove(string.slice(1), what));
        }
        else {return string.charAt(0).concat(stringCharRemove(string.slice(1), what));}
    }
}

console.log(stringCharRemove('This text is created for this exact purpose','x'));