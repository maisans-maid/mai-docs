---
id: Mongoose
title: Mongoose
hide_title: true
sidebar_label: Mongoose
description: Mongoose - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> [Mongoose](https://github.com/maisans-maid/Mai/tree/master/struct/Mongoose.js) </font>

The constructor used to store the database connection information (to mongoDB) and it's settings.

### Constructor

```js
new Mongoose(settings, password);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|settings| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Mongo Settings](https://mongoosejs.com/docs/api/connection.html#connection_Connection-openUri)>| No |  | The Mongo's Connection parameter (if Database is enabled) |
|password| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The password for the URI Connection.

<font size=4><b>Properties<b></font></br>
[connector](#.connector) </br>
[settings](#.settings) </br>
***

<font size=4><b>Methods<b></font></br>
[init]() </br>
***

<font size=4><b>Events<b></font></br>
[connected](#connected) </br>
[connecting](#connecting) </br>
[disconnected](#disconnected) </br>
[err](#err) </br>
[reconnected](#reconnected) </br>
***

### Properties
#### .connector
The connection URI used to connect to the database.</br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

#### .settings
The Mongo's connection parameter.</br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Mongo Settings](https://mongoosejs.com/docs/api/connection.html#connection_Connection-openUri)>*

### Methods

#### .init
Attempts a connection to the database. </br>
*Returns: [Void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)*

### Events

#### connected
Emitted whenever the client makes a successful connection to the database.

#### connecting
Emitted whenever the client attempts to connect to the database.

#### disconnected
Emitted whenever the client disconnects from the database.

#### err
Emitted whenever the client encounters an error.

|Parameter|Type|Description|
|:-:|:-:|:-:|
|error| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | The information regarding the error.

#### reconnected
Emitted whenever the client attepmts to reconnect after a failed connection / disconnection.
