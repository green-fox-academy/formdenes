'use strict';
import { Animal } from '../../week-03/day-03/animal'

interface Flyable{
  land();
  fly();
  takeOff();
}

abstract class Vehicle{
  numberOfDoors;
  numberOfWheels;
  shape;
}

class Helicopter extends Vehicle implements Flyable{
  land(){};
  fly(){};
  takeOff(){};
}

class Bird extends Animal implements Flyable{
  land(){};
  fly(){};
  takeOff(){};  
}