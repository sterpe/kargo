var _slice = [].slice
;

exports.Payload = function (payloadType) {

	if (payloadType !== 0 && !payloadType) {
		throw new Error("Can't have a `" +
			JSON.stringify(payloadType) +
			"` type/actionType.");
	}

	return {
		type: payloadType
		, actionType: payloadType
		, arguments: _slice.call(arguments, 1)
	};
};