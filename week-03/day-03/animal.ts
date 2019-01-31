'use strict';
export class Animal{
  hunger: number = 50;
  thirst: number = 50;
  constructor(){
    this.hunger = Math.floor(Math.random()*50);
    this.thirst = Math.floor(Math.random()*50);
  }
  eat(){
    this.hunger--;
  }
  drink(){
    this.thirst--;
  }
  play(){
    this.hunger++;
    this.thirst++;
  }
}
