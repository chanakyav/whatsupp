import {connect} from "react-redux";
import Messages from "./messages";
import {fetchMessages} from "../../actions/message_actions";



const mapStateToProps = ({activeRoom}) => ({
    activeRoom,
});

const mapDispatchToProps = dispatch => ({
    // fetchMessages: userId => dispatch(fetchMessages(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);