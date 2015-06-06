# kargo

```
var Payload = require('kargo').Payload
, payload = new Payload('FOO', 'a', 'b', 1, 2)
;

/*
 * {
 * 	type: "FOO"
 *	, actionType: "FOO"
 *	, arguments: ['a', 'b', 1, 2]
 * 	, apply: function (thisArg, func) {}
 * }
 *
 */

dispatcher.register(someStore.onDispatch = function (payload) {
	switch (payload.actionType) {
	case "FOO":
		payload.apply(someStore, someStore.someFunction);
		break;
	default:
		return;
	}

	// emit `change`, maybe ?
});
```
