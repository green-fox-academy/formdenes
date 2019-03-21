# ToDos

1. __Fork__ this repo to your account then __clone__ it to your folder  - OR  - just __download as a zip__, and it comes without any `.git` folder, so it doesnt messes up your existing folder.
2. run `npm install`
    * if you dont want some server-template git repo related stuff to appear in your `package.json` file, just delete the original `package.json` and then run `sh init.sh` from terminal, it will create `package.json` and install nessesary npm packeges. If you want to use `nodemon` with the `npm start` command, you have to add the start scritp to `packeges.json` (`"start": "nodemon server.js"`)
    * check if nodemon have been installed as well, if not, install it manually
3. Set your database credentials in the `.env` file and add `.env` to the `.gitignore` - now your database should work just fine
4. now you can check your backend server with `npm start` command, or normally with `nodmeon`
5. Feel free to check out the _snippets_ folder for additional code snippets.
6. Bear in mind, that this is a mere spine of a server, you have to give it functionality.

## Update notes
* `backend.js` is now not async as Peter corrected


<br>
<br>
<br>

###### sry for any typo