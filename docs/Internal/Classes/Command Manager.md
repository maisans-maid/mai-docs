---
id: CommandManager
title: Command Manager
hide_title: true
sidebar_label: CommandManager
description: CommandManager - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/CommandManager.js'> CommandManager </a> </font> </b>

The Manager for all of the bot's commands.

### Constructor

```js
new CommandManager(options);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
| groups| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Yes | None | Array of command group names to register |

<font size='4'><b>Properties</b></font><br></br>

[cooldowns](#.cooldowns) <br></br>
[groups](#.groups) <br></br>
[registers](#.registers) <br></br>
[size](#size) <br></br>
***

<font size='4'><b>Methods</b></font><br></br>

[add](#.add%28%20*commandData*%20%29) <br></br>
[get](#.get%28%20*query*%20%29) <br></br>
[reload](#reload%28%20*query*%20%29) <br></br>
***

### Properties
#### .cooldowns
Storage of all cooldown data for every commands that necessitates it.<br></br>
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[CooldownManager](Cooldown%20Manager.md)>*

#### .groups
Storage of all command groups, where command data are stored per groups.<br></br>
*Type: [CommandGroup](Command%20Group.md)*

#### .registers
Command registry, where command aliases and other command information necessary to get it is stored.<br></br>
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[CommandRegister](Command%20Register.md)>*

#### .size
(getter) Gets the current command size across all command groups.<br></br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*

### Methods

#### .add( *commandData* )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
| commandData | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[commandData](../Data%20Objects/command%20data.md)> | No | | The commandData to add |


Registers and stores a command to the manager. <br></br>
*Returns: [CommandManager](https://discord.js.org/#/docs/collection/master/class/Collectionr)*

#### .get( *query* )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
query|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<(Command#name\|Command#alias)>| No | | The command name or alias to get.

Gets a specific command. <br></br>
*Returns: ?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[CommandData](../Data%20Objects/command%20data.md)>*

#### .reload( *query* )
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
query|[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<(Command#name\|Command#alias)>| No | | The command name or alias to reload.

Reloads a specific command. <br></br>
*Returns: ?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[ReloadStatus](../Data%20Objects/reload%20status.md)>*
