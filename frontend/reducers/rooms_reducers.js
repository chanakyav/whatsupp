import {
    RECEIVE_ROOMS,
    RECEIVE_ROOM
} from '../actions/room_actions';

const RoomsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ROOMS:
            return action.rooms;
        case RECEIVE_ROOM:
            return Object.assign({}, oldState, {[action.room.id]: action.room})
        default:
            return oldState;
    }
};

export default RoomsReducer;