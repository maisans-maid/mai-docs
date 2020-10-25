---
id: modifying_the_bot
title: Modifying the Bot
hide_title: true
sidebar_label: Modifying the Bot
---

## Using the Discord.js Client Settings/Parameters
Using the client structure extended from the discord.js client constructor, pass the [Discord.js Client Settings](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) under the variable `clientSettings`.
```js
//index.js file
//require the extended client constructor
const Client = require('./struct/Client);

//instantiate the new client
const client = new Client({
 //pass in client settings treating it as djs clientOptions
 clientSettings: {
  messageCacheMaxSize: 300
 }
})
```
<br/><br/>

## Hosting Client Settings
Because Mai bot is not designed to be hosted by others, default values for the Client Constructor are not set, which means you need to set them all individually, or the bot will fail to start.


```js
//index.js file
//grab the timestamp at this point
const start = Date.now()

//require the extended client constructor
const Client = require('./struct/Client);

//instantiate the new client
const client = new Client({
 bootTimeStart: start,
 collections: [
   'memes'
  ],
 commandgroups: [
  'anime',
  'config'
 ],
 chatbot: true,
 enableDatabase: true,
 mongoPassword: process.env.MONGO,
 mongoSettings: {
  useUnifiedTopology : true,
  family: 4
 },
 owners: ['6728456231067891001'],
 prefix: 'm!',
 token: process.env.TOKEN,
 uploadchannel: '6728456221068912001'
})
```


<br/><br/>

## Changing the Mongo connector URI
If you have your own uri, you can change your mongo connector by going to `struct/Mongoose.js` and edit the `connector` variable
```js
//replace the value of this variable inside the mongo constructor

this.connector: //your connector URI

// do not change anything inside this file if you don't know
// what each variable means and functions as.
```
