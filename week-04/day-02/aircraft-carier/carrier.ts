'use strict';
import {Aircraft} from './aircraft';

class Carrier {
  aircrafts:Aircraft[];
  ammoStore:number;
  healthPoint:number;
  damage:number;

  constructor(ammo:number, hp:number){
    this.ammoStore = ammo;
    this.healthPoint = hp;
    this.damage = 0;
    this.aircrafts = [];
  }

  add(aircraft:Aircraft){
    this.aircrafts.push(aircraft);
    this.damage+=aircraft.ammo*aircraft.baseDamage;
  }
  fill(){
    try{
      if (this.ammoStore === 0){throw new Error("no ammo");}
      else{
        this.damage = 0;
        this.aircrafts.forEach(v => {
        if(v.isPriority()){
          this.ammoStore = v.refill(this.ammoStore);
          this.damage+=v.ammo*v.baseDamage;
        }
      });
      this.aircrafts.forEach(v => {
        if(!v.isPriority()){
          this.ammoStore = v.refill(this.ammoStore);
          this.damage+=v.ammo*v.baseDamage
        }
        });
      }
    }
    catch(e){
      console.log(e);
    }
  }
  fight(otherCarrier:Carrier){
    otherCarrier.healthPoint -= this.damage;
  }
  getStatus(){
    if (this.healthPoint >= 0){
      let text:string = '';
      text = `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.damage}
      Aircrafts:`;
      this.aircrafts.forEach(v=>text+='\n' + v.getStatus());
      return text;
    }
    else{return `It's dead Jim :()`;}
  }
}

const plane1 = new Aircraft('F16');
const plane2 = new Aircraft('F16');
const plane3 = new Aircraft('F16');
const plane4 = new Aircraft('F35');
const plane5 = new Aircraft('F35');
const plane6 = new Aircraft('F35');
const plane7 = new Aircraft('F35');

let ship1 = new Carrier(20, 1000);
let ship2 = new Carrier(500, 2000);

ship1.add(plane1);
ship1.add(plane2);
ship1.add(plane4);
ship1.add(plane5);
ship2.add(plane3);
ship2.add(plane6);
ship2.add(plane7);

console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus());
console.log('-------------')
ship1.fill();
console.log('-------------')
ship2.fill();
console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus());
console.log('-------------')
console.log(ship1.fight(ship2));
console.log('-------------')
console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus());
console.log('-------------')
console.log(ship2.fight(ship1));
console.log('-------------')
console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus());
console.log('-------------')
/* console.log('-------------')
console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus());
console.log('-------------')
console.log(ship1.getStatus());
console.log('-------------')
console.log(ship2.getStatus()); */