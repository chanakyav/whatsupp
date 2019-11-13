export const RECEIVE_ACTIVE_CONTACT = 'RECEIVE_ACTIVE_CONTACT';

export function activeContact(contact) {
  return {
    type: RECEIVE_ACTIVE_CONTACT, contact
  }
}