var config = require('../config.js');

// define async function:
module.exports.call_centreon= function call_centreon (message, callback){
  var test="alerting";
  var level="";
  var ok = config.states.ok; 
  var warning = config.states.warning; 
  var critical = config.states.critical; 

  if (ok.includes(test)) { level="OK" }
  if (warning.includes(test)) { level="WARNING" }
  if (critical.includes(test)) { level="CRITICAL" }

  console.log();
  
  var exec = require('child_process').exec;
  console.log('I launch command ' + message);
  exec(config.nsca_path + " " + message + " " + level, function(error,stdout, stderr) {
    console.log('centreon command executed');
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
      return callback("erreur");
    }
  });
}
