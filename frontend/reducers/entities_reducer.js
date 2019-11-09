import { combineReducers } from 'redux';
import users from './users_reducer';
import contacts from './contacts_reducer';

export default combineReducers({
    users,
    contacts
});
