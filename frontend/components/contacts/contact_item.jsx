import React from 'react'

export const ContactItem = ({contact, deleteContact, currentUserId}) => {

    const contactData = {
        contact: {
            userId: currentUserId,
            phoneNumber: contact.phone_number
        }
    };

    return (
        <div className="contact-item">
            <div className="contact-user-icon">
                <i className="far fa-user-circle user-icon"></i>
            </div>
            <div className="contact-info">
                <ul>
                    <li id="full-name">{`${contact.first_name} ${contact.last_name}`}</li>
                    <li id="phone-number">{contact.phone_number}</li>
                </ul>
                <div className="contact-chat-btn">
                    <button>Chat</button>
                </div>
                <div className="contact-delete-btn">
                    <button onClick={() => deleteContact(contactData)}>Delete</button>
                </div>
            </div>
        </div>
	);
}
