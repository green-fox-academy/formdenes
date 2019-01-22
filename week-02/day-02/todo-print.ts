'use strict';
let todoText: string = ' - Buy milk\n';

todoText = 'My todo:\n'.concat(todoText).concat(' - Download games').concat('\n').concat('\t - Diablo');

console.log(todoText);