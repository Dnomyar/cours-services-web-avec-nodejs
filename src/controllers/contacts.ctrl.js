class ContactsController {

  constructor(contactManager) {
    this.contactManager = contactManager;
  }

  getContacts(req, res) {
    res.status(200);
    res.send(this.contactManager.getContacts());
  }

  getContact(req, res) {
    const contact = this.contactManager.getContact(req.params.id);
    if (!contact) {
      res.status(404);
      res.send('Not found');
    } else {
      res.status(200);
      res.send(contact);
    }
  }

  addContacts(req, res) {
    const contactIn = req.body;
    const contactAdded = this.contactManager.addContact(contactIn.firstName, contactIn.lastName);
    res.send(contactAdded);
  }

  deleteContact(req, res) {
    const contact = this.contactManager.removeContact(req.params.id);
    if (!contact) {
      res.status(404);
      res.send('Not found');
    } else {
      res.status(204);
      res.send('');
    }
  }
}

module.exports = ContactsController;
