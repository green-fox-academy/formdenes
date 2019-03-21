'use strict';

const dotenv = require('dotenv');
const mysql = require('mysql');

let connection = null;

dotenv.config();

try {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  console.log(`Database connection to ${process.env.DB_DATABASE} was successful`);
} catch (e) {
  console.log(`Database connection to ${process.env.DB_DATABASE} has failed`);
  console.error(e);
}

module.exports = { connection };