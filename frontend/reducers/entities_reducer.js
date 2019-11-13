import { combineReducers } from 'redux';
import users from './users_reducer';
import contacts from './contacts_reducer';
import rooms from './rooms_reducers';

export default combineReducers({
    users,
    contacts,
    rooms
});
