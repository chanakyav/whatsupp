import {connect} from "react-redux";
import {fetchMessages} from '../../actions/message_actions';
import { addMessage } from "../../actions/message_actions";
import ChatBox from './chatbox';

const mapStateToProps = ({session, activeRoom, activeContact, entities: {users, messages}}) => ({
    currentUser: users[session.id],
    activeRoom,
    activeContact,
    messages
})

const mapDispatchToProps = dispatch => ({
    fetchMessages: userId => dispatch(fetchMessages(userId)),
    addMessage: message => dispatch(addMessage(message))
});

export default connect( mapStateToProps, mapDispatchToProps )(ChatBox);
