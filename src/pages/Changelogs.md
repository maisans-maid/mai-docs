---
title: Changelogs
description: View the bot changelogs
hide_table_of_contents: true
---
<font size='6'>Changelogs</font><br />

[![Current Version](https://img.shields.io/github/package-json/v/maisans-maid/mai/master?color=pink&label=Current%20Version)](https://github.com/maisans-maid/Mai)
<font size="2" color="grey"> Please check the bot's current version (above). Changelog might appear first before they are actually reflected on Mai.</font>

<br /><br />

### v3.0.3 (Patch)
<font size="2" color="grey">November 06, 2020</font><br /><br />

**Redesigns**
  - Redesigned XP Leaderboard GUI.

**Updates**
  - Updated Quiz Database
  - Updated Anilist Database
  - Updated Commands associated with updated database
  - Updated the truncate function
  - Updated the emoji sources

- **Fixes**
  - Fixed sauce command incorrectly showing date.
  - Fixed message event accessing guild property when dmed.

- **Removed**
  - Deleted the archived files.

---

### v3.0.2 (Patch)
<font size="2" color="grey">November 02, 2020</font><br /><br />

- **Fixes**
  - Catch Error on VoteManager causing insanity in bug reporter.
  - Fix seiyuu command not executing due to a typo.

---

### v3.0.1 (Patch)
<font size="2" color="grey">October 29, 2020</font><br /><br />

- **Redesigns**
  - Embed Redesign of various commands (Fixes on ugly looking error embeds).
  - Complete Redesign of invite command (Now gives 5 links with varying permissions).
- **Additions**
  - Added DBL vote functionality (Internal).
  - Added more reference links to Anischedule Embeds.
  - Added reset commands to XP and Economy (user-based, and server-based).
  - Added setprefix command.
  - Added Bug Reporter Feature (Internal).
- **Fixes**
  - Fixed Bug where guildProfile uses data from an unresolved Promise.
  - Fixed Bug where user can self-mute.
  - Fixed Bug where userinfo command does not execute when the provided user have no roles other than @everyone.
  - Fixed Bug where setsuggestch uses mismatched property name for checking existing channel ID.
  - Fixed Bug where new users cannot link their MAL profile for the first time.
  - Minor code refactors.

---

### v3.0.0 (Major Release)
<font size="2" color="grey">September 24, 2020</font><br /><br />

- Major Refactor of codes from v2.4.0.
- Ported all except music commands from v2.4.0.
- Bug fixes for all known bugs from previous version.
