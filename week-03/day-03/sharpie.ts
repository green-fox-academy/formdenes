'use strict';
 export class Sharpie{
   color:string;
   width:number;
   inkAmount:number;
   constructor(col:string, w:number){
     this.color = col;
     this.width = w;
     this.inkAmount = 1;
   }
   use(){
     this.inkAmount--;
   }
 }

 
