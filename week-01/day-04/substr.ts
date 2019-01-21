'use strict';
export{};

function substr(str:string, keyword:string): number {
    return str.indexOf(keyword);
}

console.log(substr("this is what I'm searching in", "searching"));
console.log(substr("this is what I'm searching in", "not"));

function substring(str:string, keyword:string): number {
    for (let i:number = 0; i<str.length-keyword.length; i++){
        for (let j:number = 0; j<keyword.length; j++){
            if (str.charAt(i + j)===keyword.charAt(j)){
                if (j===keyword.length-1){
                    return i;
                }
            }
            else break;
        }
    }
    return -1;
}

console.log(substring("this is what I'm searching in", "searching"));

console.log(substring("this is what I'm searching in", "not"));