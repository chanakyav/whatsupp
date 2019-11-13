export const RECEIVE_ACTIVE_ROOM = "RECEIVE_ACTIVE_ROOM";

export function activeRoom(room) {
    return {
        type: RECEIVE_ACTIVE_ROOM,
        room
    }
} 