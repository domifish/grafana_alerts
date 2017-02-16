'use strict';
var tools = require('../../lib/tools.js');


exports.send_to_centreon = function(req, res) {
   console.log('I will be logged first');
   tools.call_centreon('toto','titi',function(err,result){
      console.log('The user is', result)
  })
   res.json("niark");
};

