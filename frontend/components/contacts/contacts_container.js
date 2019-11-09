import { connect } from "react-redux";
import { fetchContacts, addContact } from "../../actions/contact_actions";
import Contacts from './contacts'

const mapStateToProps = ({ session, entities: { users, contacts } }) => ({
    currentUser: users[session.id],
    contacts: Object.values(contacts)
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: userId => dispatch(fetchContacts(userId)),
    addContact: contact => dispatch(addContact(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


