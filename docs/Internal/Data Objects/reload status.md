---
id: reload_status
title: Reload Status
hide_title: true
sidebar_label: Reload Status
description: Reload Status - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---
<b> <font size='5'> reloadStatus </font> </b>

The status [CommandManager#reload](../Classes/Command%20Manager#reload) returns.

| Parameter | Type | Description |
|:-:|:-:|:-:|
|err| ?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)| Is thrown whenever the reload command encounters an error. Error object might not be complete, only guaranteed property is `stack`.
|info| ?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[commandData](command_data)>| The command information. Present only when status is `OK`
|status| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|The reload status. Returns `OK` if successful, `FAILED` if otherwise.

*Type: [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)*
