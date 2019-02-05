'use strict';

export class Aircraft{
  maxAmmo:number;
  ammo:number;
  baseDamage:number;
  type:string;
  priority:boolean;

  constructor(type:string){
    if (type === 'F16'){
      this.maxAmmo = 8;
      this.baseDamage = 30;
      this.priority = false;
    }
    else if (type === 'F35'){
      this.maxAmmo = 12;
      this.baseDamage = 50;
      this.priority = true;
    }
    this.ammo = 0;
    this.type = type;

  }

  fight(){
    this.ammo = 0;
    return this.baseDamage*this.ammo;
  }
  refill(amount:number){
    this.ammo+=Math.min(this.maxAmmo, amount);
    return amount-(Math.min(this.maxAmmo, amount));
  }
  getType(){
    return this.type;
  }

  getStatus(){
    return `Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammo*this.baseDamage}`;
  }

  isPriority(){
    return this.priority;
  }
}

