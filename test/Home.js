const expect = require('chai').expect;
const request = require('request');

it('Home Route', function (done) {
	request('http://localhost:5000', function (error, response, body) {
		expect(body).to.equal('{"status":"ok","message":"Welcome!","data":""}');
		done();
	});
});
