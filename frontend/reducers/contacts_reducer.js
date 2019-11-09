import {
    RECEIVE_CONTACTS,
    RECEIVE_CONTACT,
    REMOVE_CONTACT
} from '../actions/contact_actions'

const ContactsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CONTACTS:
            return action.contacts;
        case RECEIVE_CONTACT:
            return Object.assign({}, oldState, {[action.contact.id]: action.contact});
        default:
            return oldState;
    }
};

export default ContactsReducer;