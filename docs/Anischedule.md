---
id: Anime_Scheduling
title: Setup Anime Scheduling in Your server
sidebar_label: Anime Scheduling
---

This is an implementation of [TehNut](https://github.com/TehNut)'s work [Anischedule](https://github.com/TehNut/AniSchedule). If you liked his work, you may contribute to him by going to the Anischedule Project. 

<h2>A Special Mai Bot Feature that notifies you when a new anime episode has aired</h2>
A Feature that uses the <a href = 'https://anilist.co'>AniList</a> API to retrieve the airing schedule for configured anime and sends a message when a new episode has aired.<br><br></br></br>
<img src = 'https://media.discordapp.net/attachments/728866550207086642/761214812553871360/unknown.png'></img>

# Contents
- [Preparing the bot and your server](#-Preparing-the-bot-and-your-server)
- [Adding more to the List](#-Adding-more-to-the-list)
- [Removing anime from the list](#-Removing-anime-from-the-list)
- [Viewing the watchlist](#-Viewing-the-watchlist)
- [F.A.Q.s](#-FAQs)
<br><br><br> </br></br></br>
## 🔗 Preparing the bot and your server
Before you start everything, make sure Mai has the necessary Permissions [`SEND_MESSAGES`,`EMBED_LINKS`] so that announcements are sent on a set channel. If you are self-hosting the bot, make sure you set the `client#enableDatabase` to true and that you have a valid Mongo DB account and you have set it in `client#mongoPassword` in the client constructor. The whole Anischedule Feature will not work without it. This is because the bot uses the MongoDB as it's primary database -> where the anime schedules are stored per server. <br><br></br></br>
### 1. Use the `setanischedch` command and pass in the desired `announcement channel` as the first parameter.<br></br>
###### Usage: `m!setanischedch [text-based-channel]` <br></br>
###### Example: `m!setanischedch #anime-airing` <br></br>
<img src = 'https://media.discordapp.net/attachments/728866550207086642/761479727713484830/unknown.png' ></img><br></br>
To be able to do this, you will need to have the administrator permission. This will let the bot know where to announce the anime once it's episode has started airing. Make sure the mentioned channel is accessible by the bot (`READ_MESSAGE` perms is enabled) and allows the bot to write messages on that channel. It is recommended you create a dedicated channel (Only Mai has access to `SEND_MESSAGES` permissions) so that announcement aren't buried along with the ongoing conversation.
<br><br></br></br>
### 2. Search for currently airing anime you wanted to keep track of (via browser or the m!anime command), grab the link, use the `m!watch` command and pass the copied URL as the parameter.<br></br>
###### Usage: `m!watch [anime URL]` <br></br></br>
###### Example: `m!watch https://anilist.co/anime/101291/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai`<br></br>
<img src = 'https://media.discordapp.net/attachments/728866550207086642/761481106645712946/unknown.png'><br></br></img>
Take note that the only accepted URLs are from [MyAnimeList](https://myanimelist.net) and [AniList](https://anilist.co). Wait for a confirmation from the bot. If the anime is already listed on your server, the anime will not be added, but you will be notified instead that the URL you submitted is already listed. Finished or Cancelled anime series cannot be added, but you can add upcoming anime as long as it has an official entry on AniList.
<br><br><br><br><br></br></br></br></br>
## 🔗 Adding more to the List
You can add many ongoing anime as you want, without charges! Just use the `m!watch [anime URL]` command and it will automatically add the anime, no Problem!
<br><br><br><br><br></br></br></br></br>
## 🔗 Removing anime from the list
You might think that the anime you added is none of your business, or you don't want to hear updates from it anymore because of your own personal reason. Removing anime from your watch-list is easier than you think! Just use `m!unwatch [anime URL]` command and you're good to go. Providing URL from an unlisted anime will return with an error saying that anime is not listed.<br>
<img src = 'https://media.discordapp.net/attachments/728866550207086642/761483452146384906/unknown.png'></img>
<br><br><br><br><br></br></br></br></br></br>
## 🔗 Viewing the watchlist
You added so much anime that you've lost count, and you forgot what those are. Now you start to wonder, how am I gonna view my server's listed anime? Viewing the watchlist is accessible by all members of the server via the command `m!watching`. This command will return with the list of currently watching anime for the server. Just make sure that [`EMBED_LINKS`] permission is enabled for the bot on the channel where the command is executed.<br>
<img src = 'https://media.discordapp.net/attachments/728866550207086642/761483835870412820/unknown.png'></img>
<br><br><br><br><br></br></br></br></br></br>
## 🔗 F.A.Q.s
- **I compared this feature to [TehNut](https://github.com/TehNut)'s. Where is the `next` command?**<br></br>
Unfortunately, I did not include it as I don't see it serving any purpose. But i'm still considering it if anyone suggests.<br><br></br></br>
- **Are there any plans to have it "User-specific" rather than "Server Specific" (Bot DMs the user when an anime airs)**<br></br>
This feature is very hard to implement when Discord API is imposing rate-limits on it's send endpoint. Imagine multiple users are subscribed to that anime, the bot has to send the same number of messages to those users in a short amount of time. Unless Discord loosens its ratelimit rules, I don't see it being implemented in the near future.<br><br><br></br></br></br>
### 🔗 [Go back to Home](https://github.com/maisans-maid/Mai/wiki)
