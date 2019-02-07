'use strict';

abstract class Animal {
  private name: string;
  private breedType: string;
  private age: number;
  private isDeadly: boolean;
  private happiness: number;

  constructor(n: string, b: string, a:number, d:boolean, h:number) {
    this.name = n;
    this.breedType = b;
    this.age = a;
    this.isDeadly = d;
    this.happiness = h;
  }

  getName() {
    return this.name;
  };
  breed() {
    return this.breedType;
  };

  getAge() {
    return this.age;
  }

  canIPlayWithIt() {
    return this.isDeadly ? 'you cannot play with' : 'you can play with';
  }

  isThisHappy(){
    return this.happiness > 10? 'this thing is happy' : 'this thing is not very happy';
  }

}

class Mammal extends Animal {
  constructor(n: string, ) {
    const b: string = 'pushing miniature versions out';
    const a:number = 10;
    const d:boolean = false;
    const h:number = 11;
    super(n, b, a, d, h);
  }
}
class Reptile extends Animal {
  constructor(n: string, ) {
    const b: string = 'laying eggs';
    const a:number = 2;
    const d:boolean = true;
    const h:number = 2;
    super(n, b, a, d, h);
  }
}
class Bird extends Animal {
  constructor(n: string, ) {
    const b: string = 'laying eggs';
    const a:number = 1;
    const d:boolean = false;
    const h:number = 8;
    super(n, b, a, d, h);
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());
console.log("How old is it usually?");
console.log("A " + reptile.getName() + " is usually " + reptile.getAge() + ' year(s) old.');
console.log("A " + mammal.getName() + " is usually " + mammal.getAge() + ' year(s) old.');
console.log("A " + bird.getName() + " is usually " + bird.getAge() + ' year(s) old.');
console.log("Is it deadly?");
console.log(reptile.canIPlayWithIt() + ' the ' + reptile.getName()+'.');
console.log(mammal.canIPlayWithIt() + ' the ' + mammal.getName()+'.');
console.log(bird.canIPlayWithIt() + ' the ' + bird.getName()+'.');
console.log("Is this happy?");
console.log(reptile.isThisHappy() + ', the ' + reptile.getName());
console.log(mammal.isThisHappy() + ', the ' + mammal.getName());
console.log(bird.isThisHappy() + ', the ' + bird.getName());