---
id: GuildSettingsManager
title: guild Settings Manager
hide_title: true
sidebar_label: GuildSettingsManager
description: GuildSettingsManager - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='6'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/GuildSettingsManager.js'> GuildSettingsManager </a> </font> </b>

A manager for the guild profiles (custom settings per-guild).

## Constructor

```js
new GuildSettingsManager(client);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|client| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Client](Client)> | No |  | The Instantiated Client |

<font size='4'><b>Properties</b></font><br></br>

[client](#client)<br></br>
[lastUpdatedAt](#lastUpdatedAt) <br></br>
[profiles](#profiles) <br></br>
***

<font size='4'><b>Methods</b></font><br></br>

[filter](#filter-fn-) <br></br>
[get](#get-id-) <br></br>
[has](#has-id-) <br></br>
[load](#load) <br></br>
[random](#random) <br></br>
[remove](#remove-id-) <br></br>
[set](#set--id---data--) <br></br>
[update](#update--id---data--) <br></br>
[updateOn](#updateon--id---data--) <br></br>

***

## Properties

### .client
The client that instantiated this.<br></br>
*Type: [MaiClient](Client)*

### .lastUpdatedAt
The Date from when this manager was last updated.<br></br>
*Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)*

### .profiles
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collection)<[GuildSettingProfile](GuildSettingProfile)>*

## Methods

### .filter( *fn* )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|fn| function | No | | The function to test inside the filter function.

Filter the guild profiles. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](GuildSettingProfile)>*

### .get( *id* )
Get a guild setting profile using the passed ID. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](GuildSettingProfile)>*

### .has( *id* )
Checks if the id exist in the manager. <br></br>
*Returns: ?[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

### .load()
Fetches the database for guild settings data and loads it all to the guild setting profile. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingsManager](#)>*

### .random()
Get a random guild setting profile. <br></br>
*Returns: ?[GuildSettingProfile](GuildSettingProfile)*

### .remove( *id* )
Removes guild setting profile based the passed ID. <br></br>
*Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

### .set( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the guild (serves as the key in the collection).
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data Objects/guild data model)>| No |  | The guild data to use (serves as the value in the collection) |

Get a guild setting profile using the passed ID. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[GuildSettingProfile](GuildSettingProfile)>*

### .update( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the Guild to update.
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data Objects/guild data model)>| No |  | The guild data to update |

Update a specific guild setting profile using the passed data. <br></br>
*Returns: ?[GuildSettingProfile](GuildSettingProfile)*

### .updateOn( [ *id* ], [ *data* ] )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|id| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )> | No | | The ID of the Guild to update.
|data| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataUpdateModel](../Data Objects/guild data update model)>| No |  | The guild data to update |

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
*Returns: ?[GuildSettingProfile](GuildSettingProfile)*
