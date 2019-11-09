import * as APIUtil from '../util/contacts_api_util';

export const RECEIVE_CONTACTS = "RECEIVE_CONTACTS";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";

function receiveContacts(contacts) {
    return {
        type: RECEIVE_CONTACTS,
        contacts
    };
}

export const fetchContacts = userId => dispatch => (
    APIUtil.fetchContacts(userId).then(contacts => {
        dispatch(receiveContacts(contacts))
    })
);