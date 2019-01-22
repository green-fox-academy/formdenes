'use strict';
export{};

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(list: any[]){
    return list.map(value => {
        if (value === 2){return "Croissant";}
        else if( value === false){return "Ice cream";}
        else {return value;}
    });
}

console.log(sweets(shopItems));