import { connect } from "react-redux";
import { fetchContacts, addContact, deleteContact } from "../../actions/contact_actions";
import Contacts from './contacts'

const mapStateToProps = ({ session, entities: { users, contacts } }) => ({
    currentUser: users[session.id],
    contacts: Object.values(contacts)
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: userId => dispatch(fetchContacts(userId)),
    addContact: contact => dispatch(addContact(contact)),
    deleteContact: contactData => dispatch(deleteContact(contactData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


