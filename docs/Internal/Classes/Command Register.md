---
id: CommandRegister
title: Command Register
hide_title: true
sidebar_label: CommandRegister
description: CommandRegister - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='6'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/CommandRegister.js'> CommandRegister </a> </font> </b>

A format for a command registry, where command aliases and other command information necessary to get it is stored.

## Constructor

```js
new CommandRegister(commandData);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|commandData| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[commandData](../Data Objects/command_data)>| No |  | The Command Data to register |

<font size='4'><b>Properties</b></font><br></br>

[group](#group) <br></br>
[name](#name) <br></br>
[names](#names) <br></br>
[used](#used) <br></br>
***

## Properties
### .group
The command group this command belongs to.<br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

### .name
The name for the command data, used in mapping the commands.<br></br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

### .names
The aliases for the command data.<br></br>
*Type: ?[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )>*

### .used
The number of times this command has been used across discord servers for the current instance.<br></br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*
