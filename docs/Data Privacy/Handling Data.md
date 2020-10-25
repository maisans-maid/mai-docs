---
id: Handling_Data
title: How Mai Handles your Data
sidebar_label: Handling
hide_table_of_contents: true

---

We've been discussing about how **Mai** stores the data you sent to Discord, or information you sent directly to her, but what kind of data exactly do **Mai** store? Do you really have to care how **Mai** handles them? How vulnerable do you get when **Mai** receives these information?

To better answer these questions, let's divide up the data according to where they came from:

- Official vs Non-Official

## Official vs Non-Official Data.
Official data are what I'd like to call those data that are being received through an Official API endpoint, such as Discord itself, whereas Non-official data are what I'd call to those data which was being fetched through unofficial means, say, web-scraping. Although unofficial might sound illegal, it is not necessarily true. Some website that doesn't offer official API endpoints allow some developers to scrape their website, some don't. It really is dependent on whether the website in question allows it or not.

### The data Received from Official APIs.


<font size='4'> <img src={require('../assets/check_mark.png').default} height='20'/> <b>The Discord Application Programming Interface (DAPI, Discord API).</b></font><br />
 <img align='right' src={require('../assets/discord-logo.png').default} />

<br />

 Majority of the data Mai has been accessing to comes from the Discord API itself. Sending messages, requesting information, changing roles, adding emojis, embedding messages, you name it - functions that allows Mai to fully perform what she promises to.

 The data is processed by an API wrapper which Mai uses, called the [discordjs](https://github.com/discordjs/discordjs), written in javascript for javascript users. The information that Mai receives vary according to the use, and they are being processed into an instance of a Discordjs class, which is then being read by Mai. Below are 2 of the commands with information Mai receives on each command, a user-based, and server-based, what she store, how she use it, and also which data is being ignored.

 |Command|&nbsp&nbsp&nbsp&nbsp&nbsp&nbspData&nbspReceived&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|Usage|
 |:-:|:-:|---|
 |m!leaderboard|[Guild Instance](https://discord.js.org/#/docs/main/stable/class/Guild)| The guild ID is used to query all the guild-based document in the Database. All other data are ignored.|
 |m!rank|[Message Class](https://discord.js.org/#/docs/main/stable/class/Message)| Message author ID is used to query the document in the Database, where the user XP is stored. Other data are ignored.|

 As you can see, with each instance, Mai only store and use the necessary data. Other data such as guild name (server name), guild owner (server owner), and guild creation date (server creation date) are being ignored. This is not only due to Mai avoiding privacy concerns (such as guild/server information being leaked to other guilds/servers), this also saves Mai a lot of free memory.

 The list only goes on with others, and you can see which data are being actually stored directly from Mai's [github repository](https://github.com/maisans-maid/Mai). (Check the model folder where mongoose schemas are found.)

 Mai also doesn't allow user information from being leaked server to server, which is why some measures are being set to prevent this from happening.

 If you try to access information from a user that is being cached by Mai but isn't on the server where the command was sent, Mai will not show the information at all. In fact, you'll received this notice (or a similar one) instead:

 <img src={require('../assets/userinfo.png').default} /><br /><br />

 Mai, by default, will cache any data it receives from DAPI. What she store on the database she use depends on the necessity of what kind of data the command requires.
<br />

<font size='4'> <img src={require('../assets/check_mark.png').default} height='20'/> <b>The AniList API.</b></font><br />
 <img align='right' src={require('../assets/Anilist-logo.png').default} width='200'/>

<br />

<i>This section will be updated once the connect-to-AL feature has been implemented.</i><br /><br />

Mai, being a heavily anime-based bot, would always be using Anime-based APIs, and one of them is [AniList](https://anilist.co).

There has been a planned feature to connect your Anilist account to Mai for ease of access to your AniList information without going directly to the site. However, as the feature is currently unavailable to the bot, details about it's data management will not be discussed. This section will be updated though once the feature has been implemented on Mai.

<br /><br />

### The data Received from Unofficial APIs.


<font size='4'> <img src={require('../assets/check_mark.png').default} height='20'/> <b>The MyanimeList Unofficial API.</b></font><br />
 <img align='right' src={require('../assets/MAL-logo.png').default} width='200'/>

<br />

As of the writing of this Doc, the Official API for MAL, which has been promised since it was taken out on Mid 2018, has not yet been slated for release. Mai doesn't scrape directly, but uses an unofficial API that does the scraping, which is the [Jikan API](https://jikan.moe/).

MALprofile command is a command available on Mai to connect your MAL account and Discord account through Mai. With the feature, if you wanted to check the overview of somebody's profile, you can just do so with the command (Assuming the user in question linked his MAL and Discord). This doesn't use OAuth as of the moment, and therefore will only search for a profile and directly link it through MAL_ID.

As previously mentioned, Mai can only **access** public data from your MAL profile, which means Mai cannot do anything with your account (it's just like searching on the browser for a user, but it automates because it is linked to the account.). This reduces the risk of having your MAL account being compromised. However, Mai will have no way to verify if the user is actually the owner of the Mal account they linked to.

If this is the case, you may [join us](https://support.mai-san.ml) in our development server and request for forced removal (if your account is being used by others). You may also request to blacklist the profile if you don't want Mai being able to search for it.

<br />

<center><b>If you still have questions regarding how Mai stores data you sent to discord, feel free to join our <a href='https://support.mai-san.ml'>support server!</a></b></center>
