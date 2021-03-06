'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const swap = (arr, i) => {
  
  const temp = i==1? arr[i-1].toLowerCase(): arr[i-1];
  arr[i-1] = i == 1? arr[i].charAt(0).toUpperCase() + arr[i].slice(1):arr[i];
  arr[i] = temp;
}

const irandom = (i, zero = true) => {
  return zero? Math.floor(Math.random()*i):1+Math.floor(Math.random()* (i));
}

const pushRandomThing = (arr) => {
  const randomThings = [
    'Arrgh.',
    'Uhmm.',
    'Err..err..err.'
  ]
  for (let i = 0; i < irandom(2, false);i++){
    arr.push(randomThings[irandom(3)]);
  }
}

const yodafy = (text) => {
  let finalText = '';
  let sentences = text.split('. ');
  let words = sentences.map(v => v.split(' '));
  words = words.map(v => v.map(val => val.replace('.','')));
 words.forEach((sentences, sindex) => sentences.forEach((word, i, arr) => i%2 == 1? swap(words[sindex], i):null));
 words.forEach((sentences, sindex) => sentences.forEach((word, i, arr) => i == arr.length-1? words[sindex][i] = words[sindex][i] + '.': null));
 words.forEach((sentences, sindex) => pushRandomThing(words[sindex]));
 finalText = words.map(v => v.join(' ')).join(' ');
  return finalText;
}

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  'input' in req.query?
  res.json({'received': req.query.input, 'result': req.query.input*2}):
  res.json({"error": "Please provide an input!"});
});

app.get('/greeter', (req, res) => {
  'name' in req.query && 'title' in req.query?
  res.json({"welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`}):
  'name' in req.query?
  res.json({"error": `Please provide a title!`}):
  'title' in req.query?
  res.json({"error": `Please provide a name!`}):
  res.json({"error": `Please provide a name and a title!`});
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({'appended': `${req.params.appendable}a`});

});

app.post('/dountil/:action', (req,res) => {
  const n = typeof req.body.until == 'number'? req.body.until : 1;
  const sum = n*(n+1)/2;
  let f = 1;
  for (let i = 2; i<=n; i++){
    f = f*i;
  };
  typeof req.body.until == 'number'?
  req.params.action == 'sum'?
  res.json({
    'result': sum
  }):
  req.params.action == 'factor'?
  res.json({
    'result': f
  }):
  res.json({'error': "Please provide a number!"}):
  res.json({'error': "Please provide a number!"});
});

app.post('/arrays', (req, res) => {
  !('what' in req.body) && !('numbers' in req.body)?
  res.json({"error": "Please provide what to do and with what numbers!"}):
  !('what' in req.body)?
  res.json({"error": "Please provide what to do and with the numbers!"}):
  !('numbers' in req.body)?
  res.json({"error": "Please provide some numbers!"}):
  req.body.what == 'sum'?
  res.json({'result': req.body.numbers.reduce((a,b)=> a+b)}):
  req.body.what == 'multiply'?
  res.json({'result': req.body.numbers.reduce((a,b)=> a*b)}):
  req.body.what == 'double'?
  res.json({'result': req.body.numbers.map(v=> v*2)}):
  res.json({"error": "Please provide what to do and with the numbers!"});
});

app.post('/sith', (req, res) => {
  let text = 'text' in req.body? req.body.text: '';
  text == ''?
  res.json({"error": "Feed me some text you have to, padawan young you are. Hmmm."}):
  res.json({'sith_text': yodafy(text)});

});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});