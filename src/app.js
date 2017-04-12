
const command = require('./command.js');
const ContactManager = require('./contact-manager.js');
const server = require('./server.js');
const HealthController = require('./controllers/health.ctrl.js');
const ContactController = require('./controllers/contacts.ctrl.js');

/**
 * @type {string}
 */
const contactFile = process.env.npm_package_config_contacts;

const contacts = require(`../${contactFile}`);

const cm = new ContactManager(contacts, 'contacts.json');

const healthCtrl = new HealthController();

const contactsCtrl = new ContactController(cm);

command.run(cm, server, healthCtrl, contactsCtrl);
