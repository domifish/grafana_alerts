var assert = require('assert');
var tools = require('../lib/tools');

describe('tools library', function() {
  it('call_centreon is a function', function() {
        console.assert(typeof tools.call_centreon === 'function');
  });

});
