'use strict';
import {Tree} from './tree';
import {Flower} from './flower';

class Garden{
  trees: Tree[];
  flowers: Flower[];

  constructor (){
    this.trees = [];
    this.flowers = [];
  }

  addFlower(flower:Flower){
    this.flowers.push(flower);
  }
  addTree(tree:Tree){
    this.trees.push(tree);
  }

  watering(amount:number){
    const needWaterNumber = this.trees.filter(v => v.needWater===true).length+this.flowers.filter(v => v.needWater=== true).length;
    this.trees.forEach(v => v.watering(amount/needWaterNumber));
    this.flowers.forEach(v => v.watering(amount/needWaterNumber));
    console.log(`Watering with ${amount} amount.`)
  }

  getInfo(){
    this.flowers.forEach(v => console.log(`The ${v.color} Flower ${v.needWater? 'needs water' : 'doesnt need water'}.`));
    this.trees.forEach(v => console.log(`The ${v.color} Tree ${v.needWater? 'needs water' : 'doesnt need water'}.`));
  }
}

const garden = new Garden();
const tree1 = new Tree('purple');
const tree2 = new Tree('orange');
const flower1 = new Flower('yellow');
const flower2 = new Flower('blue');

garden.addFlower(flower1);
garden.addFlower(flower2);
garden.addTree(tree1);
garden.addTree(tree2);

garden.getInfo();

garden.watering(40);
garden.getInfo();

garden.watering(70);
garden.getInfo();
