'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

 conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    console.error();
    return;
  }
  console.log('DB is connected');
}); 
//conn.end();

app.get('/home', (req, res) => {
  res.send('Hello World');
});

app.get('/posts',(req,res) => {
  conn.query(`SELECT
  post_id AS id,
  title,
  url,
  date AS timestamp,
  score,
  user_name AS owner
  FROM posts p
  LEFT JOIN users u
  ON p.user_id = u.user_id;`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.json({posts: rows});
  });
});

app.post('/posts', (req,res) => {
  console.log(req.headers.username? req.headers.username: NULL);
  
  let SQL = `INSERT INTO posts (title, url, user_id) VALUES ("${req.body.title}", "${req.body.url}",(SELECT user_id FROM users WHERE user_name="${req.headers.username? req.headers.username: NULL}"));`;
console.log(SQL);

  conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
    }
    let insertId = rows.insertId;

     
      
    SQL = `SELECT
    post_id AS id,
    title,
    url,
    date AS timestamp,
    score,
    user_name AS owner
    FROM posts p
    LEFT JOIN users u
    ON p.user_id = u.user_id
    WHERE post_id=${insertId};`;      
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };        
      res.json(rows[0]);      
    });
  });
});

app.get('/', (req, res) => {
  const category = 'category' in req.query? req.query.category:'%';
  const publisher = 'publisher' in req.query? req.query.publisher:'%';
  const plt = 'plt' in req.query? req.query.plt:'1000';
  const pgt = 'pgt' in req.query? req.query.pgt:'0';
  let condition = `WHERE cate_descrip LIKE "${category}" 
  AND pub_name LIKE "${publisher}"
  AND book_price BETWEEN ${pgt} AND ${plt}`;
  console.log(condition);
  conn.query(`SELECT book_name,
  aut_name,
  cate_descrip,
  pub_name,
  book_price
  FROM book_mast bm LEFT JOIN author a ON bm.aut_id=a.aut_id
  LEFT JOIN category c ON bm.cate_id=c.cate_id
  LEFT JOIN publisher p ON bm.pub_id=p.pub_id ${condition};`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.render('books', {books: rows});
    //console.log(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});