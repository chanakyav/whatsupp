export function fetchContacts(userId) {
    return $.ajax({
        method: "GET",
        url: `api/contacts/${userId}`
    });
}

export function addContact(contact) {
    return $.ajax({
        method: "POST",
        url: 'api/contacts/',
        data: contact
    });
}

export function deleteContact(contactData) {
    return $.ajax({
        method: "DELETE",
        url: `api/contacts/${contactData.contact.userId}`,
        data: {contact:{phone_number: contactData.contact.phoneNumber}}
    });
}

