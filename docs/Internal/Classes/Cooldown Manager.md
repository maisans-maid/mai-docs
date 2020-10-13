---
id: CooldownManager
title: Command Manager
hide_title: true
sidebar_label: CommandManager
description: CommandManager - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> [CooldownManager](https://github.com/maisans-maid/Mai/tree/master/struct/CooldownManager.js) </font>

A manager for the command cooldown.

### Constructor

```js
new CooldownManager(commandData);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|commandData| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | No |  | The Command Data to register |

<font size=4><b>Properties<b></font></br>
[name](#.name) </br>
[users](#.users) </br>
***

### Properties

#### .name
The name for the command data, used in mapping the commands.</br>
*Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)*

#### .users
The users currently registered to the cooldown manager.</br>
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[User](https://discord.js.org/#/docs/main/stable/class/User)>*
