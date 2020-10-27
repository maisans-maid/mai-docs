---
id: server_muterole
title: Setting up the Mute Role
sidebar_label: Server Mute Role
hide_table_of_contents: true

---

Before you can use the moderative command `Mute`, you have to set which role is going to be the Mute role. If you haven't tried anything of the sort yet, we'll walk you through it

<font size='6'>#1.</font> <font size='5'>Decide for a Mute Role.</font><br />
Decide which role you are going to use when using mai's mute command. The Color <font color='red'>RED</font> gives it a dangerous feeling, and the name Muted gives it justice. However, you can just pick any name and color you want. It's all up to you.<br /><br />

<font size='6'>#2.</font> <font size='5'>Set or Check the Role Permissions.</font><br />
Go to Server Settings -> Roles -> The Role you're planning to set as Mute Role -> Scroll Down to "Send Messages Permission" -> Disable.

<img src={require('../assets/muterole-setup.png').default} width='800' /><br />

Make sure the mute role is above all other member's role because other role permissions will override it. Just make sure all moderative permissions (ADMINISTRATOR, Kick Members, Ban Members, Manage Messages, etc.) are turned off. See to it also that this role is below Mai's highest role. For effeciency, place this role under Mai's highest role. <br /> <br />

You can also disallow muted members from connecting to voice channel by disabling 'Connect' from the mute role's permission.

<img src={require('../assets/disable-connect.png').default} /><br /><br />

If you are well versed in managing role permissions, you may set any disabling permissions to the muterole, and it will take effect.<br /><br />

If you haven't created a role for this yet, create one and just follow the preceeding procedures.<br /><br />

<font size='6'>#3.</font> <font size='5'>Have Mai Recognize the Muterole.</font><br />

You can now have Mai recognize this muterole by using the command `!setmute <Role>`. Mai will be using this role to add to users whenever the `mute` command is called.

<img src={require('../assets/setmute.png').default} /><br /><br />

You can also check which role the muterole is currently set to by using the same command without parameters

<img src={require('../assets/muterole-1.png').default} /><br /><br />

You can now use the moderative command `m!mute` in your server! <br /><br />
