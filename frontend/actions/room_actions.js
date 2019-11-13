import * as APIUtil from '../util/rooms_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";

function receiveRooms(rooms) {
    return {
        type: RECEIVE_ROOMS,
        rooms
    };
}

function receiveRoom(room) {
    return {
        type: RECEIVE_ROOM,
        room
    };
}

export const fetchRooms = userId => dispatch => {
    APIUtil.fetchRooms(userId).then(rooms => {
        dispatch(receiveRooms(rooms))
    })
};

export const addRoom = room => dispatch => {
    APIUtil.addRoom(room).then(room => {
        dispatch(receiveRoom(room))
    })
};