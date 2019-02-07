'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy{
  constructor(){
    this.code = (Math.random() + 1).toString(36).substr(2, 8).toUpperCase();
    this.dow = this.dowList[Math.floor(Math.random()*6)]
  }
  private dowList:string[] = ['MON','TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  private dow:string;
  private code:string;
  getDowBooking():string{
    return this.dow;
  }
  getCodeBooking():string {
    return this.code;
  }
  
}

let reservations = [];
for (let i:number = 0; i<10; i++){
  reservations.push(new Reservation);
}

for(let reservation of reservations){
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
}