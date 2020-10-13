---
id: CommandRegister
title: Command Register
hide_title: true
sidebar_label: CommandRegister
description: CommandRegister - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> [CommandRegister](https://github.com/maisans-maid/Mai/tree/master/struct/CommandRegister.js) </font>

A format for a command registry, where command aliases and other command information necessary to get it is stored.

### Constructor

```js
new CommandRegister(commandData);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|commandData| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[commandData](../Data%20Objects/command%20data.md)>| No |  | The Command Data to register |

<font size=4><b>Properties<b></font></br>
[group](#.group) </br>
[name](#.name) </br>
[names](#.names) </br>
[used](#.used) </br>
***

### Properties
#### .group
The command group this command belongs to.</br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

#### .name
The name for the command data, used in mapping the commands.</br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

#### .names
The aliases for the command data.</br>
*Type: ?[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>*

#### .used
The number of times this command has been used across discord servers for the current instance.</br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*
