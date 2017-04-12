const express = require('express');

const app = express();

/**
 * @type {string}
 */
const port = process.env.npm_package_config_port;


module.exports = {
  run: (healthCtrl, contactsCtrl) => {
    app.get('/health', (req, res) => healthCtrl.health(req, res));
    app.get('/contacts', (req, res) => contactsCtrl.getContacts(req, res));
    app.listen(port, () => {
      console.log(`port: ${port}`);
    });
  },
};
