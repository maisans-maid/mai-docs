---
id: CommandGroup
title: Command Group
hide_title: true
sidebar_label: CommandGroup
description: CommandGroup - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> [CommandGroup](https://github.com/maisans-maid/Mai/tree/master/struct/CommandGroup.js) </font>

Stores registered specific command groups for easy segregation. You can register any command groups via [Client#commandgroups](Client.md#Constructor) and will be the basis for when a command will be stored via [Command#groups](Command%20Manager.md#Constructor).

### Constructor

```js
new CommandGroup(data);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
| data| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Yes | None | Array of command group names to register|

<font size=4><b>Properties<b></font></br>
[*](#*)
***

<font size=4><b>Methods<b></font></br>
[get](#.get%28%20*commandgroup%20name*%20%29)
***

### Properties
#### .*
The command group.</br>
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collection)<[Commands](Command%20Group.md)>*

### Methods

#### .get( *commandgroup name* )
Gets a specific command group. </br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[Commands](Command%20Group.md)>*
