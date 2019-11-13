import { connect } from "react-redux";
import { fetchContacts, addContact, deleteContact } from "../../actions/contact_actions";
import { fetchRooms, addRoom } from "../../actions/room_actions";
import { activeRoom } from "../../actions/active_room_actions";
import Contacts from './contacts'

const mapStateToProps = ({ session, entities: { users, contacts, rooms } }) => ({
    currentUser: users[session.id],
    contacts: Object.values(contacts),
    rooms
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: userId => dispatch(fetchContacts(userId)),
    addContact: contact => dispatch(addContact(contact)),
    deleteContact: contactData => dispatch(deleteContact(contactData)),
    fetchRooms: userId => dispatch(fetchRooms(userId)),
    addRoom: room => dispatch(addRoom(room)),
    activeRoom: room => dispatch(activeRoom(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);


