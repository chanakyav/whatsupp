import { combineReducers } from 'redux';

import entities from './entities_reducer';
import activeRoom from './active_room_reducer';
import activeContact from './active_contact_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    activeRoom,
    activeContact,
    session,
    errors,
});

export default rootReducer;