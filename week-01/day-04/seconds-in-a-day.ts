'use strict';
export{};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currenSeconds: number = 42;

let remainingHours: number = 24 - currentHours;
let remainingMinutes: number = 60 - currentMinutes;
let remainingSeconds: number = 60 - currenSeconds;

console.log((24*60*remainingHours) + (60*remainingMinutes) + (remainingSeconds));
