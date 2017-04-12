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

  saveContacts() {
    fs.writeJson(this.contactFilePath, this.contacts);
  }


  addContact(firstName, lastName) {
    const contact = {
      id: idGenerator.generateId(),
      firstName,
      lastName,
    };
    this.contacts.push(contact);
    this.saveContacts();
    return contact;
  }

  removeContact(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.saveContacts();
  }

  getContacts() {
    return this.contacts;
  }

}


module.exports = ContactManager;
