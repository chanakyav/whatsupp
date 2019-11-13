import {
    RECEIVE_MESSAGES,
    RECEIVE_MESSAGE
} from '../actions/message_actions';

const MessagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            return Object.assign({}, oldState, {[action.message.id]: action.message})
        default:
            return oldState;
    }
};

export default MessagesReducer;