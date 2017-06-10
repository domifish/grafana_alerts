// config1.js
module.exports = {
  nsca_path: "/usr/lib/nsca_path",
  states: {
    ok: ["ok"],
    warning: ["paused", "no_data", "pending" ],
    critical: ["alerting"]
  }
}
