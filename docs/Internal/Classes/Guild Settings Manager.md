---
id: GuildSettingsManager
title: guild Settings Manager
hide_title: true
sidebar_label: GuildSettingsManager
description: GuildSettingsManager - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/GuildSettingsManager.js'> GuildSettingsManager </a> </font> </b>

A manager for the guild profiles (custom settings per-guild).

### Constructor

```js
new GuildSettingsManager(client);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|client| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Client](Client.md)> | No |  | The Instantiated Client |

<font size='4'><b>Properties</b></font><br></br>

[client](#.client)<br></br>
[lastUpdatedAt](#.lastUpdatedAt) <br></br>
[profiles](#.profiles) <br></br>
***

<font size='4'><b>Methods</b></font><br></br>

[filter](#.filter%28%20*fn*%20%29) <br></br>
[get](#.get%28%20*id*%20%29) <br></br>
[has](#.has%28%20*id*%20%29) <br></br>
[load](#.load%28%29) <br></br>
[random](#.random%28%29) <br></br>
[remove](#.remove%28%20*id*%20%29) <br></br>
[set](#.set%28%20%5B%20*id*%20%5D,%20%5B%20*data*%20%5D%20%29) <br></br>
[update](#.update%28%20%5B%20*id*%20%5D,%20%5B%20*data*%20%5D%20%29) <br></br>
[updateOn](#.updateOn%28%20%5B%20*id*%20%5D,%20%5B%20*data*%20%5D%20%29) <br></br>

***

### Properties

#### .client
The client that instantiated this.<br></br>
*Type: [MaiClient](Client.md)*

#### .lastUpdatedAt
The Date from when this manager was last updated.<br></br>
*Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)*

#### .profiles
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collection)<[GuildSettingProfile](#Guild%20Setting%20Profile.md)>*

### Methods

#### .filter( *fn* )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|fn| function | No | | The function to test inside the filter function.

Filter the guild profiles. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](#Guild%20Setting%20Profile.md)>*

#### .get( *id* )
Get a guild setting profile using the passed ID. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](#Guild%20Setting%20Profile.md)>*

#### .has( *id* )
Checks if the id exist in the manager. <br></br>
*Returns: ?[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

#### .load()
Fetches the database for guild settings data and loads it all to the guild setting profile. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingsManager](#)>*

#### .random()
Get a random guild setting profile. <br></br>
*Returns: ?[GuildSettingProfile](#Guild%20Setting%20Profile.md)*

#### .remove( *id* )
Removes guild setting profile based the passed ID. <br></br>
*Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

#### .set( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the guild (serves as the key in the collection).
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data%20Objects/guild%20data%20model.md)>| No |  | The guild data to use (serves as the value in the collection) |

Get a guild setting profile using the passed ID. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](#Guild%20Setting%20Profile.md)>*

#### .update( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the Guild to update.
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data%20Objects/guild%20data%20model.md)>| No |  | The guild data to update |

Update a specific guild setting profile using the passed data. <br></br>
*Returns: ?[GuildSettingProfile](#Guild%20Setting%20Profile.md)*

#### .updateOn( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the Guild to update.
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataUpdateModel](../Data%20Objects/guild%20data%20update%20model.md)>| No |  | The guild data to update |

Update a specific property on a guild setting profile using the passed data. <br></br>
Example: <br></br>
```js
client.guildsettings.updateOn(
  '673625361524321',
  {
    name: 'isEconomyActive',
    update: false
  }
)
```
*Returns: ?[GuildSettingProfile](#Guild%20Setting%20Profile.md)*
