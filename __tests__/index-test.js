jest.dontMock('../');

describe('Payload', function () {
	it('returns an object with correct type, actiontype, and arguments properties'
		, function () {
			var Payload = require('../').Payload
			, payload = new Payload('foo', 'a', 'b', 1, 2)
			;

			expect(Payload.mock.calls.length).toEqual(1);
	});
});
