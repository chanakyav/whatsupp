import { connect } from "react-redux";
import { fetchContacts } from "../../actions/contact_actions";
import Contacts from './contacts'

const mapStateToProps = ({ session, entities: { users, contacts } }) => ({
    currentUser: users[session.id],
    contacts: Object.values(contacts)
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: userId => dispatch(fetchContacts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


