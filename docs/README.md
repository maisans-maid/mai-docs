---
id: welcome
title: Hello
sidebar_label: Hey
---



Tamako is a Discord bot coded in JavaScript with
[discord.js](https://discord.js.org/) With over 580 commands, she is one of the most feature-rich bots out there. 


## Invite

- [Home Server](https://discord.gg/58D25t3)
- [Invite](https://discord.com/oauth2/authorize?client_id=721100913611112470&scope=bot&permissions=1043721303&scope=bot)

## Fun Information
- 500+ commands
- 28,000+ lines of JavaScript
- 61,000+ lines of JSON data
- 1 year of development

## Options

Options in Tamako are configured using channel topics. Place the option
in the appropriate channel's topic to use it.

* `<tamako:disable-leave>` Disables leave messages (Place in the channel you recieve welcome messages in).
* `<tamako:phone>` Allows a channel to recieve phone calls from the `phone` command.
* `<tamako:phone:no-voicemail>` Prevents this channel from recieving voicemails for missed calls.
* `<tamako:phone:no-random>` Makes the channel only able to be called directly in the `phone` command, rather than be picked at random.
* `<tamako:phone:block:INSERTIDHERE>` Blocks a channel or server from contacting the channel via phone.
* `<tamako:phone-book:hide>` Hides a channel from the `phone-book` command.
* `<tamako:portal>` Allows a channel to recieve portal messages from the `portal-send` command.
* `<tamako:portal:hide-name>` Hides the channel and server name from the `portal-send` command when your channel is picked.


## Other Features

Some Tamako features aren't technically commands, but are part of Tamako
nonetheless.

- Leave messages are automatically sent to any channel that recieves welcome messages. These can be turned off with [an option](#options).
- In Tamako's home server, Tamako posts a random meme from Reddit every hour using a webhook.
- Some commands will automatically run when a certain phrase is said in any message, regardless of if the command itself was called or not. These are:
	* Saying "no u" runs `no-u`.
	* Saying "(╯°□°）╯︵ ┻━┻" runs `unflip`.
