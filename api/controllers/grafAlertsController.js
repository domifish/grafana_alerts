'use strict';
var tools = require('../../lib/tools.js');


exports.send_to_centreon = function(req, res) {
   console.log('I will be logged first');
   tools.call_centreon('toto','titi',function(err,result){
      console.log('The user is', result)
  })
   if (!req.body) return res.sendStatus(400)
   var message=req.body.message;
   var ruleName=req.body.ruleName;
   var state=req.body.state;
   console.log('The message is ', message)
   console.log('The message is ', ruleName)
   console.log('The state is ', state)
   res.json('OK');
};

