# SQL Snippets

#### How to make query in JS
```js
connection.query(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  }
  //Do something with rows
});
```

### Queries

#### Select from table
```
SELECT * FROM table;
```
```
SELECT name AS Name, age AS Age, adress AS Adress 
From table t 
WHERE age > 15
ORDER BY name ASC
LIMIT 5;
```
```js
connection.query(
  'SELECT * FROM shorturls WHERE id = ?',
  [id || ''],
  (err, rows) => {
    if (err) {
      console.error(err);
      //Error actions
    }
    //Normal actions
  },
);
```
#### Instert into table
```js
connection.query(
  'INSERT INTO shorturls (url, alias, secretCode) VALUES (?, ?, ?)',
  [url, alias, generateSecretCode()],
  (err, rows) => {
    if (err) {
      console.error(err);
      //Error actions
    }
    //Normal actions
  },
);
```
#### Delete from table
```js
connection.query(
  'DELETE FROM shorturls WHERE id = ?',
  [id],
  (err, rows) => {
    if (err) {
      console.error(err);
      //Error actions
    }
    //Normal actions
  },
);
```
#### Update in table
```js
connection.query(
  'UPDATE shorturls SET hitcount = hitcount + 1 WHERE alias = ?',
  [alias || ''],
  (err, rows) => {
    if (err) {
      console.error(err);
      return false;
    }

    return true;
  },
);
```