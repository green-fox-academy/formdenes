/* Farm
Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal */

'use strict'
import { Animal } from "./animal";

class Farm{
  slots: number = 25;
  animals: Animal [] = [];
  constructor(sl:number = 25){
    this.slots = sl;
  }
  breed(){
    if(this.animals.length<this.slots){
      this.animals.push(new Animal);
    }
  }
  slaughter(){
    let leastHungruAnimal: Animal;
    this.animals.forEach((value,index) => {
      if (index === 0){
        leastHungruAnimal = value;
      }
      else {
        if (leastHungruAnimal.hunger>value.hunger){
          leastHungruAnimal = value;
        }
      }
    });
    this.animals.splice(this.animals.indexOf(leastHungruAnimal),1);
  }
}

const farm = new Farm();
for (let i:number = 0; i<25; i++){
  farm.breed();
}
console.log(farm);
farm.slaughter();
console.log(farm);
