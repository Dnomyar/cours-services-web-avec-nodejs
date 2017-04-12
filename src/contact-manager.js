const idGenerator = require('./helper/id-generator.js');
const fs = require('./helper/fs.js');


class ContactManager {

  constructor(contacts, contactFilePath) {
    this.contacts = contacts;
    this.contactFilePath = contactFilePath;
  }

  showContacts() {
    this.contacts
      .map(row => `${row.lastName.toUpperCase()} ${row.firstName}`)
      .forEach(row => console.log(row));
  }

  saveContact() {
    fs.writeJson(this.contactFilePath, this.contacts);
  }


  addContact(firstName, lastName) {
    this.contacts.push({
      id: idGenerator.generateId(),
      firstName,
      lastName,
    });
    this.saveContact();
  }

  removeContact(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.saveContact();
  }

}


module.exports = ContactManager;
