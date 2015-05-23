jest.dontMock('../lib/payload');

describe('Payload', function () {
	it('returns an object with correct type, actiontype, and arguments properties'
		, function () {
			var Payload = require('../lib/payload').Payload
			, payload = new Payload('foo', 'a', 'b', 1, 2)
			;

			expect(payload.type).toBe('foo');
			expect(payload.actionType).toBe('foo');
			expect(payload.arguments).toEqual(['a', 'b', 1, 2]);
	});
	it('returns an object with correct type, actiontype, and arguments properties when arguments are none'
		, function () {
			var Payload = require('../lib/payload').Payload
			, payload = new Payload('foo')
			;

			expect(payload.type).toBe('foo');
			expect(payload.actionType).toBe('foo');
			expect(payload.arguments).toEqual([]);
	});
	it('throws an error if the `type` property (`arguments[0]`) is null'
		, function () {
			var Payload = require('../lib/payload').Payload
			;

			expect(function () {
				return new Payload(null);
			}).toThrow(new Error("Can't have a `null` type/actionType."));
	});
	it('throws an error if the `type` property (`arguments[0]`) is undefined'
		, function () {
			var Payload = require('../lib/payload').Payload
			;

			expect(function () {
				return new Payload(undefined);
			}).toThrow(new Error("Can't have a `undefined` type/actionType."));
	});
	it('throws an error if the `type` property (`arguments[0]`) is ""'
		, function () {
			var Payload = require('../lib/payload').Payload
			;

			expect(function () {
				return new Payload("");
			}).toThrow(new Error("Can't have a `\"\"` type/actionType."));
	});
	it('is okay to pass zero (0) as a type/actionType'
		, function () {
			var Payload = require('../lib/payload').Payload
			, payload = new Payload(0)
			;
			expect(payload.type).toBe(payload.actionType);
			expect(payload.type).toBe(0);
	});
});
