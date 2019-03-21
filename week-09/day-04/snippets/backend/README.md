# Backend snippets

## Utilities

#### sendStatus

```js
function sendStatus(res, statusCode) {
  res.status(statusCode).send();
}
```

#### randIntBetween
```js
function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
```

#### generateSecretCode
```js
function generateSecretCode() {
  return `${randIntBetween(0, 9)}${randIntBetween(0, 9)}${randIntBetween(0, 9)}${randIntBetween(0, 9)}`;
}
```

## Responses

#### sendFile
```js
res.sendFile(path.join(__dirname, './frontend-assets/index.html'));
```
#### redirect
```js
res.redirect(url);
```
#### send status and content as well
```js
res.status(200).send(content);
```
