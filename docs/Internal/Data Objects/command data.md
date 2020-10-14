---
id: command_data
title: Command Data
hide_title: true
sidebar_label: Command Data
description: Command Data - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---
<b> <font size='5'> commandData </font> </b>

A format for a command registry, where command aliases and other command information necessary to get it is stored.


| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|adminOnly| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only for members with `ADMINISTRATOR` permissions.
|aliases| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )> | Yes | [] | Names that this command can also be executed for.
|clientPermission| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[permissions#FLAGS](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS )>| Yes | [] | Sets the bot's permissions that needs to be checked for the command to work.
|cooldown| [CooldownData](cooldown data) | Yes | null | Add a cooldown on the command on a per-user basis.
|economyCommand| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only if the economy feature is enabled.
|group| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | Set which command group the command is going to be registered. Command will not be registered if group is invalid.
|guildOnly| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only on guilds.
|name| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | Set the name for the command.
|nsfw|[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only on nsfw channels.
|ownerOnly|[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only by the guild owners, specified on [Client#config#owners](../Classes/Client#Constructor).
|permissions| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[permissions#FLAGS](https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS )>| Yes | [] | Sets the required permissions that the executor needs for the command to work.
|rankCommand|[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Yes | false | Sets the command usable only if the XP feature is enabled.
|run| [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) | No | | The function to run when the command is called.

*Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)*
