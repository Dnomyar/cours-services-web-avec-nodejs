const express = require('express');

const bodyParser = require('body-parser');

const app = express();

/**
 * @type {string}
 */
const port = process.env.npm_package_config_port;


module.exports = {
  run: (healthCtrl, contactsCtrl) => {
    app.use(bodyParser.json());

    app.get('/health', (req, res) => healthCtrl.health(req, res));
    app.get('/contacts', (req, res) => contactsCtrl.getContacts(req, res));
    app.post('/contacts', (req, res) => contactsCtrl.addContacts(req, res));
    app.get('/contacts/:id', (req, res) => contactsCtrl.getContact(req, res));

    app.listen(port, () => {
      console.log(`port: ${port}`);
    });
  },
};
