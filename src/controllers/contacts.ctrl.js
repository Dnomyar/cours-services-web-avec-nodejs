class ContactsController {

  constructor(contactManager) {
    this.contactManager = contactManager;
  }

  getContacts(req, res) {
    res.status(200);
    res.send(this.contactManager.getContacts());
  }
}

module.exports = ContactsController;
