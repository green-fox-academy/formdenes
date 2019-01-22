'use strict';

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let insertion: string = 'always takes longer than '
quote = quote.slice(0,quote.indexOf('you')).concat(insertion).concat(quote.slice(quote.indexOf('you')));

console.log(quote);