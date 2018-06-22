const expect = require('mocha').expect;
const request = require('supertest');
const proxyquire = require('proxyquire');

describe('api', () => {
	it('returns hits', () => {
		request(app).get('/').expect(500);
	});
});

