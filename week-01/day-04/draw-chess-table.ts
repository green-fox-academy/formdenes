'use strict';
export{};

let rows: number = 8;
let columns: number = 4;
let print: string = '';

function even(a:number):boolean {
    if (a%2 === 0){
        return true;
    }
    else return false;
}


for (let i:number = 0;i<rows;i++){
    if (even(i)){
        for (let j:number = 0;j<2*columns;j++){
            if (even(j)){
                print += "%";
            }
            else{
                print+=" ";
            }
        }
    }
    else {
        for (let j:number = 0;j<2*columns;j++){
            if (!even(j)){
                print += "%";
            }
            else{
                print+=" ";
            }
        }
    }
    console.log(print);
    print="";
}