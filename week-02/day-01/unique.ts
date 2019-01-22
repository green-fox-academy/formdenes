'use strict';


let theList:number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(list:number[]) {
    for(let i = 0; i<list.length;i++){
        while (list.indexOf(list[i])!==list.lastIndexOf(list[i])){
            list.splice(list.lastIndexOf(list[i]),1);
            console.log(list);
        }
    }
    return list;
}
console.log(unique(theList));