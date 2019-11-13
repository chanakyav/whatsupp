import React, { Component } from 'react'

export default class ContactItem extends Component {

    constructor(props) {
        super(props);
        let room = this.checkRoom(this.props.rooms);
        this.state = {
            room: room
        };       
        this.handleChat = this.handleChat.bind(this);
    }

    checkRoom(rooms) {
        let roomName = [this.props.currentUser.phone_number,
            this.props.contact.phone_number].sort().join('-');
        for (const key of Object.keys(rooms)) {
            if (rooms[key].name === roomName) return roomName;
        }
        return '';
    }

    handleChat(e) {
        if (this.state.room.length) {
            this.props.activeRoom(this.state.room);
        } else {
            let phone_numbers = [this.props.currentUser.phone_number, 
                this.props.contact.phone_number].sort().join('-');
            let room = {
                user1_id: this.props.currentUser.id,
                user2_phone_number: this.props.contact.phone_number
            }
            this.props.addRoom(room);            
            this.setState({room: phone_numbers});
            this.props.activeRoom(phone_numbers);
            this.props.activeContact(this.props.contact)
        }
    }

    render() {
        const {contact, deleteContact, currentUser} = this.props
        const contactData = {
            contact: {
                userId: currentUser.id,
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
                        <button onClick={this.handleChat}>Chat</button>
                    </div>
                    <div className="contact-delete-btn">
                        <button onClick={() => deleteContact(contactData)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}
