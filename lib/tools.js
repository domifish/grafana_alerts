// define async function:
module.exports.call_centreon = function (username, password, callback){
  var exec = require('exec');
  console.log('I will be logged second');
  exec(['ls', '-lha'], function(err, out, code) {
  if (err instanceof Error)
    throw err;
  process.stderr.write(err);
  process.stdout.write(out);
});
}
