'use strict'
import { Plant } from "./plant";

export class Flower extends Plant{
  constructor(c:string){
    super(c,5);
  }
  watering(amount:number){
    super.watering(amount, 0.75);
  }
}