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
    res.render('index',{posts: rows});
  });
});

app.post('/posts', (req,res) => {
  //console.log(req.headers.username? req.headers.username: NULL);
  
  let SQL = `INSERT INTO posts (title, url, user_id) VALUES ("${req.body.title}", "${req.body.url}",(SELECT user_id FROM users WHERE user_name="${req.headers.username? req.headers.username: NULL}"));`;
//console.log(SQL);

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

app.put('/posts/:id/upvote', (req, res) => {
  //console.log(req.params.id);
  
  const postId = req.params.id;
  const userName = req.headers.username? req.headers.username: NULL;
  let SQL = `UPDATE posts SET upvotes = upvotes+1 WHERE post_id = ${postId};`;
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
    FROM posts
    LEFT JOIN users
    ON user_name = '${userName}'
    WHERE post_id = ${postId};
    `;      
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

app.put('/posts/:id/downvote', (req, res) => {
  //console.log(req.params.id);
  
  const postId = req.params.id;
  const userName = req.headers.username? req.headers.username: NULL;
  let SQL = `UPDATE posts SET downvotes = downvotes+1 WHERE post_id = ${postId};`;
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
    FROM posts
    LEFT JOIN users
    ON user_name = '${userName}'
    WHERE post_id = ${postId};
    `;      
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

app.delete('/posts/:id', (req, res) => {
  //console.log(req.params.id);
  
  const postId = req.params.id;
  const userName = req.headers.username? req.headers.username: NULL;
  let deletedPost = {};
  SQL = `SELECT
    post_id AS id,
    title,
    url,
    date AS timestamp,
    score,
    user_name AS owner
    FROM posts
    LEFT JOIN users
    ON user_name = '${userName}'
    WHERE post_id = ${postId};
    `;      
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };        
      res.json(rows[0]);      
    });

  let SQL = `UPDATE posts SET downvotes = downvotes+1 WHERE post_id = ${postId};`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    let insertId = rows.insertId;
    
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});