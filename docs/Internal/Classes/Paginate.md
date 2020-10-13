---
id: Paginate
title: Paginate
hide_title: true
sidebar_label: Paginate
description: Paginate - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/Paginate.js'> Paginate </a></font></b>

A tool to ease the Pagination of Message Embeds.

### Constructor

```js
new Paginate(embeds);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|embeds| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed )>| Yes | [] | The Embeds to include |

:::caution
The embed order appears as they were added.

<font size='4'><b>Properties</b></font><br></br>

(getter)[currentIndex](#.currentIndex) <br></br>
(getter)[currentPage](#.currentPage) <br></br>
(getter)[firstPage](#.firstPage) <br></br>
(getter)[lastPage](#.lastPage) <br></br>
(getter)[size](#.size) <br></br>
***

<font size='4'><b>Methods</b></font><br></br>

[add](#.add%28%20*MessageEmbed*%20%29) <br></br>
[next](#.next%28%29) <br></br>
[previous](#.previous%28%29) <br></br>
***

### Properties
#### .currentIndex
The index of the MessageEmbed that is currently shown. <br></br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*

#### .currentPage
The MessageEmbed that is currently shown. <br></br>
*Type: [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)*

#### .firstPage
The first MessageEmbed that was added to this instance. <br></br>
*Type: [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)*

#### .lastPage
The last MessageEmbed that was added to this instance. <br></br>
*Type: [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)*

#### .size
The number of Embeds this instance has. <br></br>
*Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)*

### Methods

#### .add( *MessageEmbed* )
Adds a new MessageEmbed to this instance.<br></br>
*Returns: [Paginate](#)*

#### .next()
Gets the next MessageEmbed from this instance and returns it.<br></br>
*Returns: [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)*

#### .previous()
Gets the previous MessageEmbed from this instance and returns it.<br></br>
*Returns: [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)*
