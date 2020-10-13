---
id: PersonalizedCollection
title: Personalized Collection
hide_title: true
sidebar_label: PersonalizedCollection
description: PersonalizedCollection - Learn how to configure the MaiBot.
image: https://mai-san.ml/img/mai%207.png

---


<b> <font size='5'> <a href='https://github.com/maisans-maid/Mai/tree/master/struct/PersonalizedCollection.js'> PersonalizedCollection </a> </font> </b>

A tool to store and manage your own custom collections for various commands easier.

### Constructor

```js
new PersonalizedCollection(collections);
```
| Parameter | Type | Optional | Default | Description |
|:-:|:-:|:-:|:-:|:-:|
|collections| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String )>| Yes | [] | The names of the collections to set. |

<font size='4'><b>Methods</b></font><br></br>

[add](#.add%28%20*collection*%20%29) <br></br>
[deleteIn](#.deleteIn%28%20%5B%20*collection*%20%5D,%20%5B%20*key*%20%5D%20%29) <br></br>
[exists](#.exists%28%20%5B%20*collection*%20%5D,%20%5B%20*key*%20%5D%20%29) <br></br>
[findFrom](#.findFrom%28%20%5B%20*collection*%20%5D,%20%5B%20*fn*%20%5D%20%29) <br></br>
[getFirst](#.getFirst%28%20*collection*%20%29) <br></br>
[getFrom](#getFrom%28%20%5B%20*collection*%20%5D,%20%5B%20*key*%20%5D%20%29) <br></br>
[getLast](#getLast%28%20*collection*%20%29) <br></br>
[getRandom](#getRandom%28%20%5B%20*collection*%20%5D,%20%5B%20*value*%20%5D%20%29) <br></br>
[setTo](#.setTo%28%20%5B%20*collection*%20%5D,%20%5B%20*key*%20%5D,%20%5B%20*value*%20%5D%20%29) <br></br>
***

### Methods

#### .add( *collection* )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the new collection to add|

Adds a new collection to this instance.<br></br>
*Returns: [PersonalizedCollection](#)*

#### .deleteIn( [ *collection* ], [ *key* ] )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the new collection to search for the key|
|Key| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The key to delete|

Deletes a key and its associated value (element) from the collection. <br></br>
*Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*<br></br>
`true` if the element is removed, `false` if otherwise.

#### .exists( [ *collection* ], [ *key* ] )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the new collection to check.|
|Key| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The key to check. |

Checks if the key exists in the provided collection.<br></br>
*Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)*<br></br>
`true` if the collection and key exists, `false` if otherwise.

#### .findFrom( [ *collection* ], [ *fn* ] )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the new collection to check.|
|fn| [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The function to test for the find function. |

Finds a specific element from the provided collection using the passed find function. <br></br>
*Returns:  \* or undefined*

#### .getFirst( *collection* )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the collection to check.|

Gets the first value from the collection.<br></br>
*Returns:  \* or undefined*

#### .getFrom( [ *collection* ], [ *key* ] )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the collection to check.|
| key| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The key used to get the element.|

Gets a specific element by the provided key in the given collection.<br></br>
*Returns:  \* or undefined*

#### .getLast( *collection* )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the collection to check.|

Gets the last value from the collection.<br></br>
*Returns:  \* or undefined*

#### .getRandom( [ *collection* ], [ *value* ] )
|Parameter|Type|Optional|Default|Description|
|:-:|:-:|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No | | The name of the collection to check.|
|value| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Yes | None | The number of elements to return.|

Gets (a) random value(s) from the collection.<br></br>
*Returns:  \* or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)*

#### .setTo( [ *collection* ], [ *key* ], [ *value* ] )
|Parameter|Type|Description|
|:-:|:-:|:-:|
|collection| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the collection to register the element to.|
|key| * | The key to map the element.|
|value| * | The value of the element.|

*Returns: [Collection](https://discord.js.org/#/docs/collection/master/class/Collection)*
