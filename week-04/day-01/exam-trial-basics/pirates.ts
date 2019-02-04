'use strict';

class Pirate {
  name:string;
  goldAmmount: number;
  healthPoint: number;
  captain: boolean;
  hasWoodenLeg: boolean;

  constructor (name:string, ga:number, iscaptain: boolean, woodenLeng:boolean, hp:number = 10){
    this.name = name;
    this.goldAmmount = ga;
    this.healthPoint = hp;
    this.captain = iscaptain;
    this.hasWoodenLeg = woodenLeng;
  }

  work(){
    if (this.captain){
      this.goldAmmount+=10;
      this.healthPoint-=5;
    }
    else {
      this.goldAmmount+=1;
      this.healthPoint-=1;
    }
  }

  party(){
    if (this.captain){
      this.healthPoint+=10;
    }
    else {
      this.healthPoint+=1;
    }
  }

  greet(){
    if (this.hasWoodenLeg){
      console.log(`Hello, I'm ${this.name}. I have a wooden leg and ${this.goldAmmount} golds.`);
    }
    else {console.log(`Hello, I'm ${this.name}. I still have my real legs and ${this.goldAmmount} golds.`);}
  }

}

class Ship{
  crew: Pirate[];
  
  constructor (){
    this.crew = [];
  }
  
  recruit(pirate: Pirate){
    if (!this.crew.some(value => value.captain === true)){
      this.crew.push(pirate);
    }
    else if(pirate.captain === false){
      this.crew.push(pirate);      
    }
    else {console.log('Sorry, this ship already has a captain');}
  }

  getPoorPirates(){
    return this.crew.filter(pirate => pirate.goldAmmount<15 && pirate.hasWoodenLeg).map(pirate => pirate.name);
  }

  getGolds(){
    return this.crew.map(pirate => pirate.goldAmmount).reduce((amount1, amount2) => amount1 + amount2);
  }

  lastDayOnTheShip(){
    this.crew.forEach(pirate => pirate.party());
    return;
  }
  
  prepareForBattle(){
    for (let i:number = 0;i<5;i++){
      this.crew.forEach(pirate => pirate.work());
    }
    this.lastDayOnTheShip();
  }
}

//For testing, if it work
const pirate1: Pirate = new Pirate('Jack Sparrow', 0, true, false, 5);
const pirate2: Pirate = new Pirate('Will Turner', 50, false, false);
const pirate3: Pirate = new Pirate('Mr. Smee', 0, false, true);
const pirate4: Pirate = new Pirate('Hook', 100, true, false, 100);
const pirate5: Pirate = new Pirate('Idontcare', 3, false, true);

pirate1.greet();
pirate2.greet();
pirate3.greet();
pirate4.greet();
pirate5.greet();

const blackPearl: Ship = new Ship();
blackPearl.recruit(pirate1);
blackPearl.recruit(pirate2);
blackPearl.recruit(pirate3);
blackPearl.recruit(pirate4);
blackPearl.recruit(pirate5);

console.log(blackPearl);
console.log(blackPearl.getGolds());
console.log(blackPearl.getPoorPirates());
blackPearl.lastDayOnTheShip();
console.log(blackPearl);
blackPearl.prepareForBattle();
console.log(blackPearl);