var config = require('../config.js');

// define async function:
module.exports.call_centreon= function call_centreon (message, callback){
  var i = 0;
  var exec = require('child_process').exec;
  console.log('I launch command ' + message);
  exec(config.nsca_path + message, function(error,stdout, stderr) {
    console.log('centreon command executed');
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
      return callback("erreur");
    }
  });
}
