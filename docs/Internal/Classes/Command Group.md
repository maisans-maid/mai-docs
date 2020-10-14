---
id: CommandGroup
title: Command Group
hide_title: true
sidebar_label: CommandGroup
description: CommandGroup - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b><font size='6'><a href='https://github.com/maisans-maid/Mai/tree/master/struct/CommandGroup.js'>CommandGroup </a></font></b>

Stores registered specific command groups for easy segregation. You can register any command groups via [Client#commandgroups](Client#constructor) and will be the basis for when a command will be stored via [Command#groups](CommandManager#Constructor).

### Constructor

```js
new CommandGroup(data);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
| data| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Yes | None | Array of command group names to register|

<font size='4'><b>Properties</b></font><br></br>

[*](#*)
***

<font size='4'><b>Methods</b></font><br></br>

[get](#get-commandgroup-name-)
***

## Properties
### .*
The command group.<br></br>
*Type: [Collection](https://discord.js.org/#/docs/collection/master/class/Collection)<[Commands](CommandGroup)>*

## Methods

### .get( *commandgroup name* )
Gets a specific command group. <br></br>
*Returns: ?[Collection](https://discord.js.org/#/docs/collection/master/class/Collectionr)<[Commands](CommandGroup)>*
