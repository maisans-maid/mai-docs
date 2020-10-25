---
id: custom_leave_message
title: Leaving Member Announcer
sidebar_label: Leaving Member Announcer

---

Practically the same as [Member Greeter](./custom_welcome_message), but not really the same, the Leaving Member Announcer announces the leaving member from your server, just like the name suggest. Setting the whole thing up is just the same as [Member Greeter](./custom_welcome_message), but for your conveniecnce, we will walk you through setting this one up.

### Enabling the Server's Leaving Member Announcer
#### 1. Toggling the <font color='#c75a83'>Leaving Member Announcer</font> On
The first thing we're going to do is to enable the server's Leaving Member announcer, sometimes referred by the bot as **LMA**. You can enable this by typing the command `m!goodbyetoggle`!

<img src={require('../assets/goodbyetoggle-on.png').default} />
<br /><font size='2' color='#c75a83'> The notice below shows that I haven't configured my message for this feature yet, therefore, this will use the default message when someone leaves the server!</font><br /><br />
Similarly, as stated on the message above, if you want to disable this feature in your server, you can do so by typing the command again.
<br />

#### 2. Setting the <font color='#c75a83'>Leaving Member Announcer</font> Channel
Mai wouldn't know where to send the messages the first time you toggled it on whenever a member leaves - which is why even after you toggled the <font color='#c75a83'>**Leaving Member Announcer**</font>, it probably won't respond to any users that are joining. This is where you set up the channel for where the  <font color='#c75a83'>**Leaving Member Announcer**</font> would be used. <br />
Use: `m!setgoodbyech [channel mention | channel ID]`<br /><font size='2' color='#c75a83'>*You can either supply a channel mention (e.g. #welcoming-members - where it's shrouded in blue and is clickable) or just a channel ID (right click the channel, select __COPY ID__, for Desktop*)</font>

<img src={require('../assets/setgoodbyech-mention.png').default} width='300'/><br />
<font size='2' color='#c75a83'><i>Setting the channel through a channel mention</i></font> <br /><br />

<img src={require('../assets/setgoodbyech-ID.png').default} width='300'/><br />
<font size='2' color='#c75a83'><i>Setting the channel through a channel ID. Both work just fine!</i></font>

#### 3. Trying the feature with the default message
Ooh, a member just left ----> Here's how **Mai** would react:

<img src={require('../assets/goodbye-default-embed.png').default} />


### Customizing the Message (Text)
You can also do full customization using only text with Mai. Here's how it would look like:

<img src={require('../assets/goodbye-message-sample.png').default} />

As you see, that's an only plain text with a modifier. A [Modifier](#modifiers) is used as a place holder for the name, server name, and many other things.
We can edit our greeting message just like this with the use of `m!setwelcomemsg msg=set [Message Content]`. Easy, isn't it? Let's replicate the result from the image above.
```
m!setgoodbyemsg msg=set {username} left the server
```
<font size='2' color='#c75a83'>Notice that I used modifiers to replace the joining member's name.</font> <br /> <br />

And there we go! Mai just confirmed it!

<img src={require('../assets/goodbye-message-sample-set.png').default} />
<br /><font size='2' color='#c75a83'>Mai just confirmed your custom leaving member message!</font> <br /><br />

How about we test it?
<img src={require('../assets/goodbye-message-demo.png').default} />
<br /><font size='2' color='#c75a83'>We exactly got what we wanted! Noice.</font> <br /> <br />

:::info Take a good look at the following!
* Modifiers can be used to replace the text with dynamic information (changing) like the username changes per user Join. You can also use the markdown feature discord offers for text like single * for italics, double * for bold, etc. Check all the available modifiers [here](#modifiers)!
* Remember to use the command `m!setgoodbyemsg msg=true` before testing the configured text message. This will set all of your greeter message to use the message. Same would be for using embed (`m!setgoodbyemsg embed=true`)
* You can still use most of the flavor text (markdown) that you've been using for discord. Bold, italics, underline, strikethrough, spoilers, etc.
:::
<br /><br />

### Customizing the Message (Embed)

#### What is an Embed?
Have you seen those type of messages that you can only do when you send some type of link? Or when a bot sends a message in a box with a colored border? That's what an embed is. They are special messages that are often sent by bots which can have a colored border, embedded images, text fields, and other fancy properties. Here's an example of an embed (which you always see if you are a regular on Discord or is a Discord veteran):

<img src={require('../assets/embed-example.png').default} /> <br />
<font size='2' color='#c75a83'>Showing an embed from one of Mai's basic commands, the anime search feature.</font> <br /> <br />

You can see many different things set on every part of that embed:
* The top line with a little circle image on the left and the title of the anime on its right is the author field. The circle image is the <font color='#c75a83'>author image</font>, and the text beside it is the <font color='#c75a83'>author name</font>. (Well, that's supposed to be for the author, but we can use it whatever we like. Heh.). You can also mask link on that one, which will then be called the <font color='#c75a83'>author URL</font>.
* The <font color='#c75a83'>title</font>, which is not used in this embed, is a slightly larger sized text that appears below the author field and just right above the description, which can also be masked through the property known as <font color='#c75a83'>url</font>.
* The text that writes the score, popularity, and the synopsis, are called <font color='#c75a83'>description</font>, and the little image beside it which shows the anime cover art is the <font color='#c75a83'>thumbnail</font>.
* The Border color, which is Grey in this case, is named as <font color='#c75a83'>color</font>. Simple huh?
* The information and status below is a field type, which unfortunately is hard to implement at my level of coding skills, and therefore will not be included. But hey, you now know it's called an <font color='#c75a83'>Embed Field</font>! (Thats a lot of information there. <font size ='1' color='#c75a83'>**in sarcastic tone.*</font>)
* The website below with the search duration is called the footer. You can also add an image before it, just like the author field. The image there is called <font color='#c75a83'>footer image</font>, and the text beside it is called <font color='#c75a83'>footer text</font>. Great naming as usual.
* You can also add a large image below the fields, just above the footer. This is named <font color='#c75a83'>image</font>. (<font size='1' color='#c75a83'> **facepalms in Mai*</font>)
* Now remember those highlighted words (except the Field, cause, you know, I already explained why) because we are going to be using them to guide you on how to set your embed greeter message!
<br /><br />

#### How to set up the values for the Embed?
Now that you know what's an embed (not that you didn't know it before reading this) and it's component, it is now easier to understand how to create one.
Let's begin by typing `m!setgoodbyemsg embed=set` on our typing field. Do not send this message yet, this section of the message will allow the bot to understand that you are trying to set something on your embed. It should be followed by embed options, with a format of `-optionname:[option-value]`. Option name and the corresponding allowable values will be discussed below. It should also be worth noting that you can pass as many embed options as you like.

:::tip Remember
You can still use markdown flavors on the embeds except for the author, title, and footer field. Embed does not support masked links / hyperlinks as of the moment, which is unfortunate. However, [modifiers](#modifiers) can also be used anywhere on the embed.
:::

1. **Placing Text** <br />
Embed options that allows text placement includes the previously mentioned author name (`-author=name:[]`), title (`-title=:[]`), description (`-description=:[]`), and footer text (`-footer=text:[]`). This places the text inside the brackets to their location according to what was previously discussed.

2. **Placing URL** <br />
Embed options that only allows URL to be passed through. This includes the masked links and the url for images to be used. You can use the url providing [modifiers](#modifiers) on this options too, such as the avatar URL or server icon url. This includes author image (`-author=image:[]`), author url (`-author=url:[]`), url (`-url:[]`), thumbnail (`-thumbnail:[]`), image (`-image:[]`), and footer image (`-footer=image:[]`).

3. **Changing colors** <br />
As mentioned earlier, embed are unique for having a single band of color on its side, which is also modifiable in this case. Just use the option `-color:[]` to set it. Note that only valid hex codes are accepted.

Example:
```
m!setgoodbyemsg embed=set -thumbnail:[{avatarDynamic}] -title:[**{displayName}** has left **{guildName}**!]
-color:[#c75a83] -footer=text:[Oh no! Why could have he/she left?]

//sets the thumbnail, title, color, and footer text of the embed
```

<img src={require('../assets/goodbye-embed-set.png').default} /> <br />
<font size='2' color='#c75a83'>All the parameters on the example have successfully been accepted.</font> <br /> <br />

:::tip Worthy to be remembered
You can set these options on different messages. Example, you set the thumbnail and color on a message, then you set the title and description on another message, the embed settings from those two options are saved.
:::

Let's test how it looks like:

[This section is currently being developed]

### Modifiers
Here are the list of available modifiers you can use in setting Mai's Leaving Member Announcer.<br />
<font size='3'> Remember to include the brackets! </font>

|Modifier|Use|Definition|
|:-:|:-:|:-:|
|Avatar|`{avatar}`| The Avatar Image URL for the user! (treats GIF as a static image)|
|Avatar Dynamic|`{avatarDynamic}`| The Avatar Image URL for the user in dynamic format! (works with GIF)|
|Channel Count|`{channelCount}`| The current total number of channels the server has, including text, voice, and category channels!|
|Category Channel Count|`{categoryChannelCount}`| The current total number of category channels the server has!|
|Text Channel Count|`{textChannelCount}`| The current total number of text channels the server has!|
|Voice Channel Count|`{voiceChannelCount}`| The current total number of voice channels the server has!|
|Created At|`{createdAt}`|The time (in Javascript Date Format) when the joining member's account was created! [UTC]|
|Created At M/D/Y|`{createdAtMDY}`|The time (human readable format) when the joining member's account was created! [UTC]|
|Discriminator|`{discriminator}`| The discriminator (the 4 numbers after the hash [#] symbol of the username) of the user!|
|Display Color|`{displayColor}`| The Color of the User that joined! (Usually just default)|
|Display Name|`{displayName}`| The Username of the Member that joined, or Nickname, if there is any! |
|Guild Icon|`{guildIcon}`| The Icon URL of the server. |
|Guild Icon Dynamic|`{guildIconDynamic}`| The Icon URL of the server in dynamic format. |
|Guild Name|`{guildName}`| The name of the Server. |
|Guild Owner|`{guildOwner}`|  The username of the server owner. |
|Guild Owner Nickname|`{guildOwnerNickname}`| The username of the server owner, or nickname if there is any.|
|Guild Owner Tag|`{guildOwnerTag}`| The username#discriminator of the server owner.|
|Guild Owner Discriminator|`{guildOwnerDiscrim}`| The discriminator of the server owner.|
|Guild Owner Avatar|`{guildOwnerAvatar}`| The Avatar Image URL for the server owner.|
|Guild Owner Avatar Dynamic|`{guildOwnerAvatarDynamic}`| The Avatar Image URL for the server owner in dynamic format),
|Joined At|`{joinedAt}`| The time (in Javascript Date Format) when this user joined the server.|
|Joined At M/D/Y|`{joinedAtMDY}`| The time (human readable format) when this user joined the server.|
|Member Count|`{memberCount}`| The total number of users this guild currently has.|
|Tag|`{tag}`| The username#discriminator of the user that joined.|
|User|`{user}`| The username of the user that joined.|
|User Nickname|`{userNickname}`| The username of the user that joined, or nickname if there is any.|
|User Tag|`{userTag}`| The username#discriminator of the user that joined.|
|User Discrim|`{userDiscrim}`| The discriminator of the user that joined.|
|User Avatar|`{userAvatar}`| The Avatar Image URL for the user!|
|User Avatar Dynamic|`{userAvatarDynamic}`| The Avatar Image URL for the user in dynamic format!|
|User Mention|`{usermention}`| A mention format for the user that joined. Note that you cannot use this in various places in the Embed.|
|Member Join Rank|`{memberJoinRank}`| The order from which the member has joined.|
|Member Join Rank Ordinalized|`{memberJoinRankOrdinalized}`|  The order from which the member has joined, in ordinalized format (with suffixes like st, nd, rd, and th)|
<br /> <br />
