'use strict';

let drinks:string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
console.log(drinks.map(function(name:string){return name + name;}));