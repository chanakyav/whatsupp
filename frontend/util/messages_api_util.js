export function fetchMessages(userId) {
    return $.ajax({
        url: `api/messages/${userId}`
    });
}

export function createMessage(messageData) {
    return $.ajax({
        method: "POST",
        url: "api/messages",
        data: {message: messageData}
    });
}