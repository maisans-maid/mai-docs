---
id: Anischedule
title: Auto Message Schedule of Anime
sidebar_label: Anime Scheduling
---

This is an implementation of [TehNut's](https://github.com/TehNut) work Anischedule. If you liked his work, you may contribute to him by going to the Anischedule Project.
 
<h2> A Special Mai Bot Feature that notifies you when a new anime episode has aired</h2><br></br>
A Feature that uses the [AniList API](https://anilist.co/) to retrieve the airing schedule for configured anime and sends a message when a new episode has aired.
<img src="https://camo.githubusercontent.com/c517cec8443ceaf08ef2b3c5870440d7e0b0a26a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3732383836363535303230373038363634322f3736313231343831323535333837313336302f756e6b6e6f776e2e706e67" />
<br></br>

## Preparing the bot and your server
:::caution
Before you start everything, make sure Mai has the necessary Permissions `SEND_MESSAGES`, `EMBED_LINKS` so that announcements are sent on a set channel
:::
:::info
If you are self-hosting the bot, make sure you set the `client#enableDatabase` to true and that you have a valid Mongo DB account and you have set it in `client#mongoPassword` in the client constructor.<br />
The whole Anischedule Feature will not work without it. This is because the bot uses the MongoDB as it's primary database -> where the anime schedules are stored per server.
:::
**1. Use the ``setanischedch`` command and pass in the desired ``announcement channel`` as the first parameter.**<br></br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Usage: ``m!setanischedch [text-based-channel]``<br></br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Example: ``m!setanischedch #anime-airing``
<img src="https://camo.githubusercontent.com/f347a48a077daeacaf079dc22376945447efaa8b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3732383836363535303230373038363634322f3736313437393732373731333438343833302f756e6b6e6f776e2e706e67" />
<br/><br/>

**2. Search for currently airing anime you wanted to keep track of, grab the link, use the ``m!watch`` command and pass the copied URL as the parameter.**<br/>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Usage: ``m!watch [anime URL]``<br/>
<img src="https://camo.githubusercontent.com/1c6fb0b672c1d5db051723207d604071d711ac9c/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3732383836363535303230373038363634322f3736313438313130363634353731323934362f756e6b6e6f776e2e706e67"/><br/><br/>

:::note
Take note that the only accepted URLs are from [MyAnimeList](https://myanimelist.net/) and [AniList](https://myanimelist.net/).<br/>Wait for a confirmation from the bot. If the anime is already listed on your server, the anime will not be added, but you will be notified instead that the URL you submitted is already listed.<br/>Finished or Cancelled anime series cannot be added, but you can add upcoming anime as long as it has an official entry on AniList.
:::

## Adding More to the List
You can add many ongoing anime as you want, without charges! Just use the ``m!watch [anime URL]`` command and it will automatically add the anime, no Problem!
## Removing Anime From the List
You might think that the anime you added is none of your business, or you don't want to hear updates from it anymore because of your own personal reason.<br/>
Removing anime from your watch-list is easier than you think! Just use ``m!unwatch [anime URL]`` command and you're good to go. Providing URL from an unlisted anime will return with an error saying that anime is not listed.
<img src="https://camo.githubusercontent.com/b696b311e2cc7d6f88ddd6716876a0d9d0f23d62/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3732383836363535303230373038363634322f3736313438333435323134363338343930362f756e6b6e6f776e2e706e67"/>

## Viewing The WatchList
You added so much anime that you've lost count, and you forgot what those are. Now you start to wonder, how am I gonna view my server's listed anime? Viewing the watchlist is accessible by all members of the server via the command `m!watching`. This command will return with the list of currently watching anime for the server.<br/>Just make sure that `[EMBED_LINKS]` permission is enabled for the bot on the channel where the command is executed.
## F.A.Q.s
<p><li><b>I compared this feature to <a href="https://github.com/TehNut">TehNut</a>'s. Where is the next command?</b></li>
Unfortunately, I did not include it as I don't see it serving any purpose. But i'm still considering it if anyone suggests.</p>
<p><li><b>Are there any plans to have it "User-specific" rather than "Server Specific"</b></li>
This feature is very hard to implement when Discord API is imposing rate-limits on it's send endpoint. Imagine multiple users are subscribed to that anime, the bot has to send the same number of messages to those users in a short amount of time. Unless Discord loosens its ratelimit rules, I don't see it being implemented in the near future.</p>
