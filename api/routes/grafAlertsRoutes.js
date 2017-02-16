'use strict';
module.exports = function(app) {
  var grafAlerts = require('../controllers/grafAlertsController');


  // grafAlerts Routes
  app.route('/sendCentreon')
    .post(grafAlerts.send_to_centreon);
};
