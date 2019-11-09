import React from 'react'

export const ContactItem = ({contact, deleteContact}) => {
    return (
        <div className="contact-item">
            <p>{`${contact.first_name} ${contact.last_name}`}</p>
            <p>{contact.phone_number}</p>
        </div>
    )
}
