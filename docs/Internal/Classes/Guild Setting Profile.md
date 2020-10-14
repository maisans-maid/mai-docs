---
id: GuildSettingProfile
title: Guild Setting Profile
hide_title: true
sidebar_label: GuildSettingProfile
description: GuildSettingProfile - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='6'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/GuildSettingProfile.js'> GuildSettingProfile </a> </font> </b>

A profile for a guild settings, where guild-specific settings are stored.

## Constructor

```js
new guildSettingProfile( guildDataModel );
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|guildDataModel| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data Objects/guild_data_model)>| No |  | The guild data to register |


<font size='4'><b>Properties</b></font><br></br>

[goodbye](#goodbye) <br></br>
[id](#id) <br></br>
[isEconomyActive](#isEconomyActive) <br></br>
[invite](#invite) <br></br>
[roles](#roles) <br></br>
[suggestChannel](#suggestChannel) <br></br>
[welcome](#welcome) <br></br>
[xp](#xp) <br></br>
***

## Properties

### .goodbye
The custom goodbye message setting for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[GoodbyeData](../Data Objects/goodbye_data)>*


### .id
The ID of this guild.<br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>*

### .isEconomyActive
Whether the server is subscribed to the economy feature.<br></br>
*Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

### .invite
The invite data for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[InviteData](#)>*

### .roles
The moderative roles for this guild <br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[GuildRoleData](../Data Objects/guild_role_data)>*


### .suggestChannel
The ID of the set suggestChannel for this guild. <br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>*

### .welcome
The custom welcome message setting for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[WelcomeData](../Data Objects/welcome_data)>*

### .xp
The xp settings for this guild. <br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildXpSettings](../Data Objects/guild_xp_settings)>*
