var config = require('./config.js');

// var nscapath = config.get('nsca.path');

console.log('nsca path :' + config.nsca_path);

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/grafAlertsRoutes');
routes(app);


app.listen(port);


console.log('Grafana Notification Listener API server started on: ' + port);
