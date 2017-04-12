
const command = require('./command.js');
const ContactManager = require('./contact-manager.js');

/**
 * @type {string}
 */
const contactFile = process.env.npm_package_config_contacts;

const contacts = require(`../${contactFile}`);

const cm = new ContactManager(contacts, 'contacts.json');

command.run(cm);
