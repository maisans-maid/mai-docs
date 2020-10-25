---
id: self_hosting
title: Self Hosting
hide_title: true
sidebar_label: Self Hosting
hide_table_of_contents: true
---

:::caution
To use discord.js (Mai Bot uses Discord.js to interact with the Discord API), you'll need to install Node.js.
If you do have Node installed, but have an older version (i.e. anything below 12.0), you should upgrade to the latest version. Discord.js v12 requires Node 12.0 or higher.
:::
<br/>

## 1. Get the project Locally
Run the following commands to get the project locally
```
git clone https://github.com/maisans-maid/Mai.git # or clone your own fork
cd Mai
npm install
npm build
```

<br/>

## 2. Create a new .env file in the root directory of the project with the following properties:
```
TOKEN=
MONGO=
```
This is also present on .env_example file on the root directory of the project <br/>
`TOKEN` should be the bot token obtained from [Discord's developer panel](https://discord.com/developers). <br/>
`MONGO` should be your mongo DB password, if you want to use the MONGO Database. You can use the bot without this too (not recommended, at some point it might crash the bot), but you won't be able to use [commands](../commands) that rely on Mongo DB.

<br/>

# 3. Start the bot
You can start the bot by typing in `npm start` in the commandline.<br/><br/>


---
