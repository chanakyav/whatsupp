import * as APIUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

function receiveMessages(messages) {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

function receiveMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const fetchMessages = userId => dispatch => {
    APIUtil.fetchMessages(userId).then(messages => {
        dispatch(receiveMessages(messages))
    })
};

export const createMessage = message => dispatch => {
    APIUtil.createMessage(message).then(message => {
        dispatch(receiveMessage(message))
    })
};
