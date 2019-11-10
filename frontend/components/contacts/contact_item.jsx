import React from 'react'

export const ContactItem = ({contact, deleteContact}) => {
    return (
			<div className="contact-item">
                
				<div className="contact-user-icon">
					<i className="far fa-user-circle"></i>
				</div>
				<ul>
					<li>{`${contact.first_name} ${contact.last_name}`}</li>
					<li>{contact.phone_number}</li>
				</ul>
			</div>
		);
}
