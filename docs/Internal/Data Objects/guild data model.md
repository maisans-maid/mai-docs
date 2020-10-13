---
id: guild_data_model
title: Guild Data Model
hide_title: true
sidebar_label: Guild Data Model
description: Guild Data Model - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---
<b> <font size='5'> guildDataModel </font> </b>

| Parameter | Type | Description |
|:-:|:-:|:-:|
|goodbyeChannel|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>| The ID of the channel goodbye messages are set to.
|goodbyemsg|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The goodbye message.
|guildID| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>| The ID of this guild.
|isEconomyActive|[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)| Whether the Economy is enabled in the server.
|invite| ? | ? |
|isxpActive| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)| Whether the xp is enabled in the server.
|muterole| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>| The ID of the set mute role.
|suggestChannel| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>| The ID of the set suggest channel.
|welcomeChannel| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)| The number of messages this bot has sent for the current instance.
|welcomemsg|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)| The welcome message.
|xpExceptions| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake )>>| The ID the channels in a server where xp commands are disabled.

*Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)*
