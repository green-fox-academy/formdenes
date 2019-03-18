'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/index',(req,res) => {
    res.render('index', {
      "posts": [
          {
              "id": 1,
              "title": "Wild Darkness",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 24635,
              "owner": "Stephany_Carlos"
          },
          {
              "id": 2,
              "title": "The Dying Thief",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 5258,
              "owner": "Lucas_Rosario"
          },
          {
              "id": 4,
              "title": "The Waves's Witch",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 18465,
              "owner": "Fatima_Bao"
          },
          {
              "id": 5,
              "title": "The Fairy of the Girlfriend",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 26788,
              "owner": "Mellissa_Johana"
          },
          {
              "id": 8,
              "title": "Savior Of The Light",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 20852,
              "owner": "Sona_Eugenio"
          },
          {
              "id": 9,
              "title": "Criminals With Silver",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 26539,
              "owner": "Tracey_Sophia"
          },
          {
              "id": 10,
              "title": "Knights Without Sin",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 6053,
              "owner": "Stephany_Carlos"
          },
          {
              "id": 11,
              "title": "Criminals And Vultures",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 27408,
              "owner": "Delmar_Sylvie"
          },
          {
              "id": 12,
              "title": "Heroes And Lions",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 3352,
              "owner": "Mack_Elayne"
          },
          {
              "id": 13,
              "title": "Failure Without Flaws",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 25674,
              "owner": "Stephany_Carlos"
          },
          {
              "id": 15,
              "title": "Eliminating The Emperor",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 16143,
              "owner": "Maren_Lisbeth"
          },
          {
              "id": 16,
              "title": "Starting Technology",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 22409,
              "owner": "Jessika_Carmon"
          },
          {
              "id": 17,
              "title": "age Of Hell",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 18878,
              "owner": "Fatima_Bao"
          },
          {
              "id": 18,
              "title": "Horse Of Fortune",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 14045,
              "owner": "Mack_Elayne"
          },
          {
              "id": 19,
              "title": "Vultures Without Time",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 3285,
              "owner": "Misti_Marcy"
          },
          {
              "id": 20,
              "title": "Heirs Of Nightmares",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 20831,
              "owner": "Rudolf_Adelina"
          },
          {
              "id": 21,
              "title": "Women And Lions",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 24058,
              "owner": "Burma_Joselyn"
          },
          {
              "id": 23,
              "title": "Argument Of Yesterday",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 3915,
              "owner": "Lucas_Rosario"
          },
          {
              "id": 24,
              "title": "Wand Of Fortune",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 16652,
              "owner": "Sona_Eugenio"
          },
          {
              "id": 25,
              "title": "Blinded In The Sea",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 19163,
              "owner": "Oralia_Desiree"
          },
          {
              "id": 26,
              "title": "Sounds Of The Mountains",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 19088,
              "owner": "Stephany_Carlos"
          },
          {
              "id": 29,
              "title": "Agents Of The Light",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:10.000Z",
              "score": 21624,
              "owner": "Tracey_Sophia"
          },
          {
              "id": 30,
              "title": "Crockford",
              "url": "http://9gag.com",
              "timestamp": "2019-03-08T15:01:45.000Z",
              "score": 0,
              "owner": "Maren_Lisbeth"
          }
      ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});