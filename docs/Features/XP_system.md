---
id: XP_System
title: XP System
hide_title: true
sidebar_label: XP System
---

## Information

### What is XP
XP (Experience Points) is a virtual point a user earns upon chatting on the server where this feature is enabled in and whose channel is not excluded from the blacklist. Earning XP is a fun way to challenge your friends with, and can also denote of how much you are actively involved in the server, which can give anyone a good grasp of your server activity.

### How to gain XP
You can start gaining XP when you start chatting on an xp-enabled channel in the server. You can gain at a rate of 15-35 XP per minute.

### How to level up
If you accumulate enough xp, you are automatically promoted to another level. Required XP to level up for each level increases as you progress through the higher ranks.

### How to view your level card
To view your level card, just type `m!rank`. You can also see the level card of user whom you share the server with by mentioning them or using their ID.

### How to view the server leaderboard
To view the server leaderboard, just type `m!lb`. Mai will only show the top 10 earners of the server, however, you will know your rank at the bottom of the embed.

---

## Server Setup

### Enabling the XP System
By default, after Mai joins your server, the XP System is off. However, anyone on the server who has the `ADMINISTRATOR` permission can enable it. Typing the command `m!xptoggle` will toggle the xp system for the server on if it's off, and off if it's on.

### Disabling the XP System on some Channels
When enabling this feature on your server first time, all channels will be included in the gathering and monitoring of XP. If you want to exclude some channels, say because these channels caters for spammers (spam channel), or the channel is for bot-usage and you want xp to be effective only on normal conversation, you can exclude channels from being listened to by typing the command `m!xpexcempt [channel1] <channel2>... <channeln>`. The command accepts multiple channels at once so you can get rid of all those channels in a single command! Only server `ADMINISTRATOR` can use this command.

### Enabling the XP System on disabled channels.
After you excempted a channel from the xp feature, you might reach to the point that you want to enable it on the channel again, you can do so by typing `m!xpallow [channel1] <channel2>... <channeln>`. Same with disabling, the command accepts multiple channels at once. Only server `ADMINISTRATOR` can use this command.

### Resetting the xp of a specific user
You might think that you wanted to reset a specific user's xp because of misconduct, or because of spam abuse, or any reason at all. You can reset a user's xp by typing in `m!userxpreset <User>`, and the user's xp will be forever gone. This action is irreversible, and thus xp lost will never be recovered.

### Resetting the xp of the whole server
Anyone on the server with the `ADMINISTRATOR` permissions can reset all of user's xp by typing `m!xpreset`. This action is irreversible, and XP lost will never be recovered.

---

### Data Management
Handling of Data from this feature is discussed on [Data Privacy](../Data%20Privacy/Handling_Data )
