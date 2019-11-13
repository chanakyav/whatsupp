import { combineReducers } from 'redux';
import users from './users_reducer';
import contacts from './contacts_reducer';
import rooms from './rooms_reducers';
import messages from './messages_reducer'

export default combineReducers({
    users,
    contacts,
    rooms,
    messages
});
