# grafana_alerts
node rest api listener to create customized alerts from grafana notifications

## Install

`npm install`

## Usage

  Add send_nsca path in config.js :

`
module.exports = {
  nsca_path: "/usr/lib/send_nsca",
}
`

## Dependencies

send_nsca needs to be installed on the system


