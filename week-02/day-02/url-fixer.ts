'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace(/bots/gi, 'odds');

url = url.slice(0,5).concat(':').concat(url.slice(5));
console.log(url);