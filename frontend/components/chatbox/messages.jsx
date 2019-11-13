import React, { Component } from 'react'

export default class Messages extends Component {

    getRoomMessages() {
        let messages = [];
        if (this.props.messages.length === 0) return messages;
        for (const key of Object.keys(this.props.messages)) {
            if (this.props.messages[key].room_id === this.props.activeRoom.id) {
                messages.push(this.props.messages[key])
            }
        }
        return messages;
    }

    render() {
        const messages = this.getRoomMessages();
        return (
            <div>
                <ul>
                    {messages.map(message => 
                        <li key={message.id}>
                            {message.message}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
