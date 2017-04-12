const commander = require('commander');

/**
 * @type {string}
 */
const contactFile = process.env.npm_package_config_contacts;

const contacts = require(contactFile);


const showContacts = () => {
  contacts
    .map(row => `${row.lastName.toUpperCase()} ${row.firstName}`)
    .forEach(row => console.log(row));
};


commander
  .command('list')
  .description('List contacts')
  .action(() => {
    showContacts();
  });


if (process.argv.length <= 2) commander.help();

commander.parse(process.argv);
