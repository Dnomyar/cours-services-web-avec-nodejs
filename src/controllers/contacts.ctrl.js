class ContactsController {

  constructor(contactManager) {
    this.contactManager = contactManager;
  }

  getContacts(req, res) {
    res.status(200);
    res.send(this.contactManager.getContacts());
  }

  addContacts(req, res) {
    const contactIn = req.body;
    const contactAdded = this.contactManager.addContact(contactIn.firstName, contactIn.lastName);
    res.send(contactAdded);
  }
}

module.exports = ContactsController;
