'use strict'
import { Plant } from "./plant";

export class Tree extends Plant{
  constructor(c:string){
    super(c,10);
  }
  watering(amount:number){
    super.watering(amount, 0.4);
  }
}