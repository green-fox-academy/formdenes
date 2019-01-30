'use strict';
export{};

class Animal{
  hunger: 50;
  thirst: 50;
  constructor(){
    this.hunger = 50;
    this.thirst = 50;
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
