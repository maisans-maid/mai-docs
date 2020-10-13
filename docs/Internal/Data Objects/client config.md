---
id: client_config
title: Client Config
hide_title: true
sidebar_label: Client Config
description: ClientConfig - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---
<b> <font size='5'> [clientConfig](#) </font>

Special configuration for the client instance.

| Parameter | Type | Description |
|:-:|:-:|:-:|
|chatbot| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Whether to allow the chatbot functionality
|commanddir| ?[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | Folders from which the command are stored
|debug| ?[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)> | ID of the channel where debug is logged.
|github| ?[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The github repository for this project.
|owners| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake)>>| Array of IDs this bot recognize as her developers, allowing access to owner commands.
|pings| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Pings for various API this bot uses.
|prefix| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The default prefix for this bot.
|token| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The token this bot uses for logging in.
|website| ?[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The website this bot is advertised.


*Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)*
