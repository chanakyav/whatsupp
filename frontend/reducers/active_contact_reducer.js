import {RECEIVE_ACTIVE_CONTACT} from '../actions/active_contact_actions';

const ActiveContactReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ACTIVE_CONTACT:
            return action.contact;
        default:
            return oldState;
    }
};

export default ActiveContactReducer;

