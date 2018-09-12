<h1 align="center"> Deep Space </h1>
  <p align="center">
    <a href="https://david-dm.org/InternalCosmos/Deep-Space" target="_blank"><img src="https://david-dm.org/InternalCosmos/Deep-Space/status.svg" alt="Dependencies"></a>
    <a href="https://github.com/InternalCosmos/Deep-Space/blob/master" target="_blank"><img src="https://img.shields.io/github/stars/InternalCosmos/Deep-Space.svg?style=social&label=Star" alt="Github Stars"></a>
    <a href="https://github.com/InternalCosmos/Deep-Space/issues" target="_blank"><img src="https://img.shields.io/github/issues/InternalCosmos/Deep-Space.svg" alt="Github Issues"></a>
  </p>
  
Some helpful links:
* [Node](https://nodejs.org/dist/v8.8.1/node-v8.8.1-x64.msi)
* [Klasa Docs](https://klasa.js.org/tutorial-GettingStarted.html)
## Installation
First, you want to rename `config.example` to `config.json`. Make it look like below: Don't forget to replace "[your bot's token here]" with your bot's actual token.
```json
{
"token": "[your bot's token here]"
}
```
Next fill out some of the info in app.js and then run it using `node app.js`. 
The finished product should look like this:
```js
const klasa = require('klasa');
const config = require('./config.json')

const client = new klasa.Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'prefix', // change it to your wanted prefix
    cmdEditing: true, // Whether the bot should update responses if the command is edited
    typing: false, // this can be annoying
    ignoreSelf: true, // Unless it's a selfbot then make this true
    ignoreBots: true, // I'd use this
    ownerID: "your id here",
});

client.login(config.token);
```
