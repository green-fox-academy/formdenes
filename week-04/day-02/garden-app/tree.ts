'use strict'
import { Plant } from "./plant";

export class Tree extends Plant{
  constructor(c:string, mW:number = 10){
    super(c,mW);
  }
  watering(amount:number){
    super.watering(amount, 0.4);
  }
}