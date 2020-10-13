---
id: GuildSettingProfile
title: Guild Setting Profile
hide_title: true
sidebar_label: GuildSettingProfile
description: GuildSettingProfile - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/GuildSettingProfile.js'> GuildSettingProfile </a> </font> </b>

A profile for a guild settings, where guild-specific settings are stored.

### Constructor

```js
new guildSettingProfile( guildDataModel );
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|guildDataModel| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildDataModel](../Data%20Objects/guild%20data%20model.md)>| No |  | The guild data to register |

<font size='4'><b>Properties</b></font><br></br>

[goodbye](#.goodbye) <br></br>
[id](#.id) <br></br>
[isEconomyActive](#.isEconomyActive) <br></br>
[invite](#.invite) <br></br>
[roles](#.roles) <br></br>
[suggestChannel](#.suggestChannel) <br></br>
[welcome](#.welcome) <br></br>
[xp](#.xp) <br></br>
***

### Properties

#### .goodbye
The custom goodbye message setting for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[GoodbyeData](../Data%20Objects/goodbye%20data.md)>*

#### .id
The ID of this guild.<br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>*

#### .isEconomyActive
Whether the server is subscribed to the economy feature.<br></br>
*Type: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*

#### .invite
The invite data for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[InviteData](#)>*

#### .roles
The moderative roles for this guild <br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[GuildRoleData](../Data%20Objects/guild%20role%20data.md)>*

#### .suggestChannel
The ID of the set suggestChannel for this guild. <br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>*

#### .welcome
The custom welcome message setting for this guild.<br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[WelcomeData](../Data%20Objects/welcome%20data.md)>*

#### .xp
The xp settings for this guild. <br></br>
*Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[guildXpSettings](../Data%20Objects/guild%20xp%20settings.md)>*
