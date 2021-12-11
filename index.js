const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((data) => console.table(data));
      break;

    case "get":
      getContactById(id).then((getContact) => console.table(getContact));
      break;

    case "remove":
      removeContact(id).then((deletedContact) => console.table(deletedContact));
      break;

    case "add":
      addContact(name, email, phone).then((contacts) =>
        console.table(contacts)
      );
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
