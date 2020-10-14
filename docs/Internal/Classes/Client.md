---
id: Client
title: Client
hide_title: true
sidebar_label: MaiClient
description: MaiClient - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='6'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/Client.js'> MaiClient </a> </font> </b>
<font size='4'> extends <b> <a href='https://discord.js.org/#/docs/main/stable/Class/Client'> Client </a> </b> </font>

The main hub for interacting with the Discord API, extended from the discord.js default client constructor.

## Constructor

```js
new MaiClient(options);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|clientSettings| [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions)| Yes | none | Discord.js options for the client |
|bootTimeStart | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No | None | Sets the Timestamp when the bot started booting up |
|collections | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )> | No | None | Create new collections to be used in the bot. Names in the array will be the collection name. Can be accessed via struct/PersonalizedCollections|
|commandgroups| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )> | No | None | Set the command groups to be included by the bot. Must be identical to folder names inside the commands folder. Excluded folder names will not be loaded. Setting to empty array means no command will be loaded.
|chatbot | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | No | None | Enable/Disable the chatbot functionality  |
|enableDatabase | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | No | None | Enable/Disable the connection to Database (Will affect database-reliant commands/services) |
|mongoPassword | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | None | Set the mongo Password. You can also change your connector URI [here](#changing-the-mongo-connector-uri)
|mongoSettings | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) <[Mongo Settings](https://mongoosejs.com/docs/api/connection.html#connection_Connection-openUri)> | No | None | Set the Mongo's Connection parameter (if Database is enabled)
|owners| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[User ID](https://discord.js.org/#/docs/main/stable/class/User?scrollTo=id)> | No | None | User IDs that can use the owner-only commands|
|prefix| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | None | Default bot prefix
|token | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | None | The Discord Bot Token, grabbed from the [Discord Developer Portal](https://discord.com/developers)
|uploadchannel | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) <[Channel ID](https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=id)> | No | None | The channel where bot uploads will be made (for `clear` and `eval` commands). This has to be accessible by the bot.

<font size='4'><b>Properties</b></font><br></br>

[bootTimeStart](#boottimestart) <br />
[collections](#collections) <br />
[commands](#commands) <br />
[config](#config) <br />
[database](#database) <br />
[guildsettings](#guildsettings) <br />
[messages](#messages) <br />
[uploadChannel](#uploadchannel) <br />
***

<font size='4'><b>Methods</b></font><br></br>

[connect](#.connect)
***

## Properties
### .bootTimeStart
The time in UNIX timestamp the bot was initiated. <br></br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*

### .collections
All the custom collections the user has defined on [MaiClient#options#collections](#) - mapped by the collection name, if there is any.<br></br>
*Type: [PersonalizedCollections](PersonalizedCollection)*

### .commands
All of the commands that the client is currently monitoring, mapped by the command name. <br></br>
*Type: [CommandManager](CommandManager)*

### .config
Special configurations made on Mai. Can be defined on [MaiClient#options#config](#). <br></br>
*Type: [ClientConfig](../Data Objects/client_config)*

### .database
The database the current MaiClient instance is using. Is nullable when [MaiClient#enableDatabase](#) is set to false. <br></br>
*Type: ?[Mongoose](Mongoose)*

### .guildsettings
All of the guild profiles the current MaiClient instance is handling, mapped by their IDs.<br></br>
*Type: [GuildSettingsManager](GuildSettingsManager)*

### .messages
The number of message the bot has been sending and receiving for the current instance. <br></br>

*Type: [MessageCountData](../Data Objects/message_count_data)*

### .uploadChannel
The channel ID from which the bot sends uploaded data (for eval and clear commands).<br></br>
*Type: ?[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>*

## Methods

### .connect()
Logs in to discord and attempts to connect on a database (if enabled). <br></br>
*Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)*
