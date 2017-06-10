var assert = require('assert'),
http = require('http');

describe('/', function () {

  it('should say "waiting for events"', function (done) {
    http.get('http://localhost:3000/', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('"waiting for events"', data);
        done();
      });
    });
  });
});


