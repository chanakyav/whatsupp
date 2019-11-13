import { RECEIVE_ACTIVE_ROOM } from '../actions/active_room_actions';

const ActiveRoomReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ACTIVE_ROOM:
            return action.room
        default:
            return oldState;
    }
};

export default ActiveRoomReducer;