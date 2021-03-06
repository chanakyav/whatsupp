export function fetchRooms(userId) {
    return $.ajax({
        url: `api/rooms/${userId}`
    });
}

export function addRoom(roomData) {
    return $.ajax({
        method: "POST",
        url: `api/rooms`,
        data: {room: roomData}
    });
}

export function fetchRoom(phoneNumber) {
    return $.ajax({
        url: `api/room/${phoneNumber}`
    });
}