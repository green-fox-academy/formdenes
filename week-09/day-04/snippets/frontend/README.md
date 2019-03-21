# Frontend Snippets

* [Tips and Tricks](#tips-and-tricks)
* [Config](#the-config-variable)
* [Onload init](#the-initalizing-thingie)
* [Post](#posting-or-sendign-request-with-button)
* [Response](#processing-response)
* [Forms](#getting-data-from-form)

## Tips and Tricks
> based on Peter's example exam

* He created a config object in the beginning of the code. He stored all the variables in it. This way these variables were structured and in one place. E.g:
  * There was a part wich contained all the messages and one step deeper it was divided into sub categories and finaly in those categories were the messages.
  * The same for colors.
  * With endpoints he went even one step deeper.
* He had only one part of code, which actualy run in the beginning. This was an onload eventlistener. He initialized all other things inside of this event. 
* He also put basicly everything into functions.
* He is always checking if an element is present or not and handles the not part too.

## The config variable
```js
const config = {
  backendURL: 'http://localhost:4000/',
  endPoints: {
    post: {
      link: 'api/links',
    }
  },
  messages: {
    error: 'Your alias is already in use!',
    serverError: 'No response from the server',
    elementMissing: 'Element is not present!',
  },
  colors: {
    messageDefault: '#000000',
    messageError: '#FF0000',
  }
}
```
## The initalizing thingie
```js
window.addEventListener('load', function () {
  initSubmitButton();
  hideMessage();
  setMessageColor(config.colors.messageDefault);
});
```

## Posting or sendign request with button
```js
function initSubmitButton() {
  const button = document.getElementById('submit-button');

  if (typeof button !== 'undefined') {
    button.onclick = function (event) {
      event.stopPropagation();
      event.preventDefault();
      postFormData();
    };
  } else {
    logError(config.messages.elementMissing);
  }
}

function postFormData() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', processResponse);
  req.open('POST', config.backendURL + config.endPoints.post.link);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(getFormData()));
}
```

## Processing response
```js
function processResponse(data) {
  const status = data.target.status || 0;

  if (status === 200) {
    const response = JSON.parse(data.target.responseText);
    showSuccess(response);

  } else if (status === 400) {
    showError();

  } else {
    logError(config.messages.serverError);
  }
}
```

## Getting data from Form
```js
function getFormData() {
  return {
    url: document.getElementById('form-url').value,
    alias: document.getElementById('form-alias').value,
  }
}
```

## Loging errors
```js
function logError(msg) {
  console.error(msg);
}
```

## Showing messages
With `#message` ID. \
You can create new functions, which combine multiple of these functions.

#### Set the content
```js
function setMessageContent(content) {
  document.querySelector('#message p').innerHTML = content;
}
```
#### Set the color
```js
function setMessageColor(colorCode) {
  document.querySelector('#message').style.color = colorCode;
}
```
#### Show the message
```js
function showMessage() {
  document.querySelector('#message').style.display = 'block';
}
```
#### Hide the message
```js
function hideMessage() {
  document.querySelector('#message').style.display = 'none';
}
```

## Reset field content
```js
function resetFields() {
  document.getElementById('form-url').value = '';
  document.getElementById('form-alias').value = '';
}
```