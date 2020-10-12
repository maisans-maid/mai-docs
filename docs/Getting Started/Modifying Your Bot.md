---
id: modifying_the_bot
title: Modifying the Bot
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

| Parameter | Type |  Description |
|---|---|---|
|`bootTimeStart` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Sets the Timestamp when the bot started booting up |
|`collections` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Create new collections to be used in the bot. Names in the array will be the collection name. Can be accessed via struct/PersonalizedCollections|
|`commandgroups`| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Set the command groups to be included by the bot. Must be identical to folder names inside the commands folder. Excluded folder names will not be loaded. Setting to empty array means no command will be loaded.
|`chatbot` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)   | Enable/Disable the chatbot functionality  |
|`enableDatabase` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)   | Enable/Disable the connection to Database (Will affect database-reliant commands/services) |
|`mongoPassword` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Set the mongo Password. You can also change your connector URI [here](#changing-the-mongo-connector-uri)
|`mongoSettings` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) <[Mongo Settings](https://mongoosejs.com/docs/api/connection.html#connection_Connection-openUri)>   | Set the Mongo's Connection parameter (if Database is enabled)
|`owners`| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[User ID](https://discord.js.org/#/docs/main/stable/class/User?scrollTo=id)>   | User IDs that can use the owner-only commands|
|`prefix`| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Default bot prefix
|`token` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The Discord Bot Token, grabbed from the [Discord Developer Portal](https://discord.com/developers)
|`uploadchannel` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) <[Channel ID](https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=id)>   | The channel where bot uploads will be made (for `clear` and `eval` commands). This has to be accessible by the bot.

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
