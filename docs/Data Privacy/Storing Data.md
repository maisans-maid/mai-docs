---
id: Storing_Data
title: How Mai Stores your Data
sidebar_label: Storing
hide_table_of_contents: true

---

**Mai** collects information from you, users, from <a href='https://discord.com'><font color='#7289da'>**Discord**</font></a> in order for some functionality to work. These information are needed so that Mai could keep track of who owns who, and who's what is whose. Confusing, right? <a href='https://discord.com'><font color='#7289da'>**Discord**</font></a> itself does not disclose critical information you've sent to them to us, developers, when interacting with the API. However, there might be times that you became paranoid of how some bot you use collect data, and the most pressing question is that, how where do they post it?
<br />



<font size='6'><img src={require('../assets/check_mark.png').default} height='30'/> <b>Mai</b> Stores your Data on a <b>well-known</b> Database.</font><br />

This is not a form of advertising, but for Mai's users to be aware of where their information are stored, we use a popular database provider, which is [MongoDB](https://mongodb.com).

<img src={require('../assets/mongoDB.png').default} /><br /><br />

**MongoDB** is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. **MongoDB** is developed by MongoDB Inc., and licensed under the Server Side Public License (SSPL). Even in the <a href='https://blog.discord.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7'>early days of <font color='#7289da'>Discord</font></a>, they use MongoDB as their database for saving message data before they migrated to their own personal database due to increase in volume of incoming and outgoing data.

<br /><br />

<font size='6'><img src={require('../assets/check_mark.png').default} height='30'/> <b>Mai</b> Stores your Data through a <b>verified</b> API wrapper.</font><br />

It's very hard to interact with Mongo's API, which is why Mai has to rely on an API wrapper. This wrapper in question is known as [mongoose](https://mongoosejs.com).

<img src={require('../assets/mongoose.png').default} /><br /><br />

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

<br /><br />

<font size='6'><img src={require('../assets/check_mark.png').default} height='30'/> <b>Mai</b> only stores <b>necessary</b> data.</font><br />

While Mai accesses some of your data from <a href='https://discord.com'><font color='#7289da'>**Discord**</font></a>, Mai doesn't necessarily save all of them. In fact, most of the time Mai requests user data, it is only to get the necessary information to save user configuration. For example, whenever Mai requests for the user information, discord sends a lot of unnecessary data, unnecessary in the context of bot's use, like what is the user's username, his avatar (display profile), or even when was the account created - but because of the functionality of the command, which only needs the unique user ID - Mai wouldn't even bother saving all of them, and would only grab the user ID so that it could locate the configuration of the user in the database that Mai's been accessing.

<br /><br />

<font size='6'><img src={require('../assets/check_mark.png').default} height='30'/> <b>Mai</b> will never <b>sneakily fetch</b> your data.</font><br />

Ever become paranoid of uploading private images (copyrighted works, for example, and not what you're thinking, kono ecchi!) on a private channel where bot has access in? Well, you should be! You never know what bots collect when they're not visually interacting with the user. Bot is a powerful tool in Discord, and it can even work on background. Rest assured though that Mai won't ever use this ploy. Mai is a bot that revolves around the perfectness of Mai herself.

<br /><br />

<font size='6'><img src={require('../assets/check_mark.png').default} height='30'/> <b>Mai</b> and only Mai alone <b>has access</b> to the database.</font><br />

Mai's code is open-source, which means anyone could see the code's structure, including how Mai connects to the database. Worry not, even if that's the case, rest assured that the connector URI (the connection url Mai uses to connect to the database) still requires a password which is saved in the environment variable of the bot.

<br /><br />

<center><b>If you still have questions regarding how Mai handles data you sent to discord, feel free to join our <a href='https://support.mai-san.ml'>support server!</a></b></center>
