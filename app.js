/**
 * @type {string}
 */
const contactFile = process.env.npm_package_config_contacts;

const contacts = require(contactFile);


contacts
  .map(row => `${row.lastName.toUpperCase()} ${row.firstName}`)
  .forEach(row => console.log(row));
