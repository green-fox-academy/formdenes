/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

import {Sharpie} from "./sharpie";

class SharpieSet{
  sharpies: Sharpie[];

    constructor() {
        this.sharpies = [];
    }

    add(sharpie: Sharpie) {
        this.sharpies.push(sharpie);
    }
    countUsale(){
      let count:number = 0;
      this.sharpies.forEach(value => {
        if (value.inkAmount>0){
          count++;
        }
      });
      return count;

    }
    removeTrash(){
      return this.sharpies.filter(value => value.inkAmount>0);

    }
}

const sharpie1 = new Sharpie('blue',20);
const sharpie2 = new Sharpie('blue',20);
const sharpie3 = new Sharpie('blue',20);
const sharpie4 = new Sharpie('blue',20);
const sharpie5 = new Sharpie('blue',20);

sharpie2.use();
sharpie4.use();

const sharpies = new SharpieSet;
sharpies.add(sharpie1);
sharpies.add(sharpie2);
sharpies.add(sharpie3);
sharpies.add(sharpie4);
sharpies.add(sharpie5);

console.log(sharpies);
console.log(sharpies.countUsale());
console.log(sharpies.removeTrash());