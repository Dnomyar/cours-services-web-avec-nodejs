const commander = require('commander');


const list = (contactManager) => {
  commander
      .command('list')
      .description('List contacts')
      .action(() => {
        contactManager.showContacts();
      });
};

const add = (contactManager) => {
  commander
      .command('add <firstName> <lastName>')
      .description('Add a contact')
      .action((firstName, lastName) => {
        contactManager.addContact(firstName, lastName);
      });
};

const remove = (contactManager) => {
  commander
      .command('remove <id>')
      .description('Remove a contact')
      .action((id) => {
        contactManager.removeContact(id);
      });
};


module.exports = {
  run: (contactManager) => {
    list(contactManager);
    add(contactManager);
    remove(contactManager);

    if (process.argv.length <= 2) commander.help();
    commander.parse(process.argv);
  },
};
