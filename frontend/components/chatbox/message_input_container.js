import {connect} from "react-redux";
import MessageInput from "./message_input";
import {createMessage} from "../../actions/message_actions";

const mapStateToProps = ({activeRoom, session, entities: {users}}) => ({
    activeRoom,
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
