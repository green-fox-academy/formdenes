'use strict'
import { Plant } from "./plant";

export class Flower extends Plant{
  constructor(c:string, mW:number = 5){
    super(c,mW);
  }
  watering(amount:number){
    super.watering(amount, 0.75);
  }
}