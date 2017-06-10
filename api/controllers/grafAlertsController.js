'use strict';
var tools = require('../../lib/tools.js');

exports.get_root = function(req, res) {
   res.json('waiting for events');
};

exports.post_centreon = function(req, res) {
   var message=req.body.message;
   var ruleName=req.body.ruleName;
   var state=req.body.state;
   console.log('The message is ', message)
   console.log('The rulename is ', ruleName)
   console.log('The state is ', state)

   tools.call_centreon(message,function(err,result){
      if (err) {
        console.log('[ERROR] Erreur d execution')
      } else {
        console.log('[INFO] execution ok')
      }
  })
   if (!req.body) return res.sendStatus(400)
   res.json('OK');
};

