'use strict';

const fs = require('fs');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'formdenes',
  password: 'password',
  database: 'users'
});

const myFileName = 'users.csv';
let myFile = fs.readFileSync(myFileName, 'utf8');
myFile = myFile.split('\n');
myFile = myFile.map(v => v.split(','));

//console.log(myFile);

/* conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    console.error();
    return;
  }
  console.log('DB is connected');
}); */

 conn.query(`DROP TABLE IF EXISTS users ;`, (err, rows) => {
   if (err){
     console.error(err);
   }
 })
 console.log('dropped table'); 

conn.query(`CREATE TABLE IF NOT EXISTS users (
  ${myFile[0][0]} varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][1]} varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][2]} varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][3]} varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][4]} varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][5]} varchar(10) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][6]} varchar(100) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  ${myFile[0][7]} varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (${myFile[0][0]})
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;`, (err, rows) => {
   if (err){
     console.error(err);
   }
 });

 console.log('done with creating table');


 
conn.query(`INSERT INTO users (
  ${myFile[0][0]},
  ${myFile[0][1]},
  ${myFile[0][2]},
  ${myFile[0][3]},
  ${myFile[0][4]},
  ${myFile[0][5]},
  ${myFile[0][6]},
  ${myFile[0][7]}
  ) VALUES
  (
  ${myFile[1][0]}
  ${myFile[1][1]}
  ${myFile[1][2]}
  ${myFile[1][3]}
  ${myFile[1][4]}
  ${myFile[1][5]}
  ${myFile[1][6]}
  ${myFile[1][7]})`, (err, rows) => {
  if (err) {
    console.error(err);
    res.status(500).send();
    return;
  }
  console.log('insterted one row');
  
});