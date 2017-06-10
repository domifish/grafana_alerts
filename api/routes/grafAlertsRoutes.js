'use strict';
module.exports = function(app) {
  var grafAlerts = require('../controllers/grafAlertsController');

app.route('/')
    .get(grafAlerts.get_root);

  app.route('/sendCentreon')
    .post(grafAlerts.post_centreon);
};
