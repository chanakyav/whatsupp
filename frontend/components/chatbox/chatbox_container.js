import {connect} from "react-redux";
import {fetchMessages} from '../../actions/message_actions';
import ChatBox from './chatbox';

const mapStateToProps = ({session, activeRoom, entities: {users, messages}}) => ({
    currentUser: users[session.id],
    activeRoom,
    messages
})

const mapDispatchToProps = dispatch => ({
    fetchMessages: userId => dispatch(fetchMessages(userId))
});

export default connect( mapStateToProps, mapDispatchToProps )(ChatBox);
