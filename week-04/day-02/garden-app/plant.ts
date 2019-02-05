'use strict';

export class Plant {
  color:string;
  needWater:boolean;
  water:number;
  minWater:number;

  constructor(c:string, mW:number, nW:boolean = true, w:number = 0){
    this.color = c;
    this.needWater = nW;
    this.water = w;
    this.minWater = mW;
  }

  watering(amount:number, perc:number){
    if (this.needWater){
      this.water+=amount*perc;
      this.water<this.minWater ? this.needWater = true : this.needWater = false;
    }
  }
}