'use strict';

export class Plant {
  color:string;
  needWater:boolean;
  water:number;
  private minWater:number;

  constructor(c:string, mW:number){
    this.color = c;
    this.needWater = true;
    this.water = 0;
    this.minWater = mW;
  }

  watering(amount:number, perc:number){
    if (this.needWater){
      this.water+=amount*perc;
      this.water<this.minWater ? this.needWater = true : this.needWater = false;
    }
  }
}