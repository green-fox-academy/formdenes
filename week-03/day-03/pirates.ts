'use strict';

import { createWriteStream } from "fs";

export{};

function chance(x:number){
  return Math.random() > x;
}

class Pirate {

  private intoxicated: boolean = false;
  private state:string;
  private consumedRum:number = 0;

  drinkSomeRum(){
    if (this.state !== 'passed oud' && this.state !== 'died'){
      this.intoxicated = true;
      this.consumedRum ++;

    }
    else {console.log(`he's ${this.state}`);}
  }
  howsItGoingMate(){
    if (this.intoxicated && this.state !== 'passed oud' && this.state !== 'died'){
      for(let i:number = 0; i<Math.floor(Math.random()*4);i++){
        console.log('Pour me anudder!')
      }
    }
    else if(this.state !== 'passed oud' && this.state !== 'died'){
      console.log('Arghh, I\'ma Pirate. How d\'a d\'ink its goin?');
    }
    else {console.log(`he's ${this.state}`)}
  }
  die(){
    this.state = 'died';
  }
  brwal(pirate:Pirate){
    if (chance(1/3)){
      this.die();
    }
    else  if (chance(1/2)){
      pirate.die();
    }
    else {
      this.die();
      pirate.die();
    }
  }
  getInfo(){
    let info = {
      state: this.state,
      intoxicated: this.intoxicated,
      consumedRum: this.consumedRum,
    };
    return info;
  }
}


//The Pirate Ship
class Ship {
  private crew: Pirate[];
  private score: number = 0;
  private captain;
  private alivePirates:number;
  
  fillShip(){
    this.crew.push(new Pirate);
    for (let i:number = 0; i<Math.floor(Math.random()*50);i++){
      this.crew.push(new Pirate);      
    }
    this.setInfo();
  }
  getShipInfo(){
    this.setInfo();
    console.log(
      `${this} ship's captain is  ${this.crew[0].getInfo().state} and consumed ${this.crew[0].getInfo().consumedRum} amount of rum.`
      );
    console.log(`The number of alive pirates on ${this} ship is ${this.alivePirates}`);
  }
  setInfo(){
    this.captain = this.crew[0].getInfo();
    this.alivePirates = this.crew.filter(value => value.getInfo().state !== 'died').length;
  }
  calculateScore(){
    this.score = this.alivePirates - this.captain.consumedRum;
    return this.score;
  }
  party(){
    let rums:number = Math.floor(Math.random()*50);
    let i:number = 0;
    while (rums>0){
      if(i>+this.crew.length){
        i = 0;
      }
      if (chance(1/2)){
        this.crew[i].drinkSomeRum();
        rums--;
      }
      i++;
    }
  }
  losses(){
    let death:number = Math.floor(Math.random()*50);
    let i:number = 0;
    while (death>0){
      if(i>+this.crew.length){
        i = 0;
      }
      if (chance(1/2)){
        this.crew[i].die();
        death--;
      }
      i++;
    }
  }
  battle(otherShip: Ship){
    if (this.calculateScore() >= otherShip.calculateScore()){
      this.party();
      this.setInfo();
      this.getShipInfo();
      return true;
    }
    else{
      this.losses();
      this.setInfo();
      this.getShipInfo();
      return false;
    }
  }
}


class BattleApp {
  ship1: Ship;
  ship2: Ship;
  constructor(firsShip: Ship, secondShip: Ship){
    this.ship1 = firsShip;
    this.ship2 = secondShip;
    this.ship1.fillShip();
    this.ship2.fillShip();
  }
  letTheBattleBegin(){
    this.ship1.battle(this.ship2);
    this.ship2.battle(this.ship1);
  }
}

class Armada{
  ships: Ship[];
  constructor(shipCount:number){
    for (let i:number = 0; i<Math.floor(Math.random()*12);i++){
      this.ships.push(new Ship);      
      this.ships.forEach(ship => ship.fillShip);
    }
  }
  war(orhterArmada: Armada){
    let shipsFirst = this.ships;
    let shipsSecond = orhterArmada.ships;
    return listMergeSortShips(shipsFirst,shipsSecond);
  }

}

class WarApp{
  armada1: Armada;
  armada2: Armada;
  constructor(armadaOne: Armada, armadaTwo: Armada){
    this.armada1 = armadaOne;
    this.armada2 = armadaTwo;
  }
  war(){
    this.armada1.war(this.armada2);
  }
}

function listMergeSortShips(list1: Ship[], list2: Ship[]){
  if (list1[0].battle(list2[0])){
    if(list2.length>1){
      return (listMergeSortShips(list1,list2.splice(0,1)));
    }
    else {return true;}
  }
  else {
    if(list1.length>1){
      return (listMergeSortShips(list1.splice(0,1),list2));
    }
    else {return false;}
  }
}