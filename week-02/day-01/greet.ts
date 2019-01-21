'use strict';
export{};
let name: string = "Greenfox";

function greet(yourname:string = "Stupid") {
    
    console.log("Greetings, dear " + yourname);

}

greet(name);