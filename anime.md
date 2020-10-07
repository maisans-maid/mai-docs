---
id: Anime_Scheduling
title: Auto Message Schedule of Anime
sidebar_label: Anime Scheduling
---

## Gettings Started

> You can leave this if you do not want to setup anime announcement in your channel



You will need to set an announcement channel in order for this to work, you can
do this by<br/>
 ```t!anisched setchanel [channel mention]```<br/>
<img src={require('./assets/1.gif').default} /><br/>

Now you need to add an anime show,<br/>
To Do So, type ```t!anisched add ```
<img src={require('./assets/2.gif').default} /><br/>

Now you are all set, and <br/>
Tamako will automatically send airing date of upcoming episodes to the channel specified<br/>

## Commands Available

|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commands&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Usage |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------|
| ```t!anisched help```                         | Prints out all available sub-commands with a short description                                             |
| ```t!anisched setchannel [channel mention]``` | Set the announcement channel for airing announcements on the server                                        |
| ```t!anisched add```                          | Adds a new anime to watch for new episodes of. You may provide an AniList entry link or a MyAnimeList link |
| ```t!anisched channel```                      | Return the currently selected anime announcement channel                                                   |
| ```t!aniched clean```                         | Purges any completed shows from this channel's watch list                                                  |
| ```t!anisched list```                         | Prints out all available sub-commands with a short description                                             |
| ```t!anisched next```                         | Displays the next anime to air (in the next 7 days) that the currently selected channel is watching.       |
| ```t!anisched remove```                       | Removes an anime from the list. You may provide an AniList entry link or a MyAnimeList link                |
