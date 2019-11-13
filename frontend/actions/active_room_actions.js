import {fetchRoom} from '../util/rooms_api_util';

export const RECEIVE_ACTIVE_ROOM = "RECEIVE_ACTIVE_ROOM";

function receiveRoom(room) {
    return {
        type: RECEIVE_ACTIVE_ROOM,
        room
    }
}

export const activeRoom = phoneNumber => dispatch => {
    fetchRoom(phoneNumber).then(room => {
        dispatch(receiveRoom(room))
    })
}