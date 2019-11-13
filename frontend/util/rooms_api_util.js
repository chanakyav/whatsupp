export function fetchRooms(userId) {
    return $.ajax({
        url: `api/rooms/${userId}`
    });
}

export function addRoom(roomData) {
    return $.ajax({
        method: "POST",
        url: `api/rooms`,
        data: {
            room: {
                user1_id: roomData.room.user1_id,
                user2_phone_number: roomData.room.user2_phone_number
            }
        }
    });
}