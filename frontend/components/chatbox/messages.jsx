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

    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    classifyMessage(message) {
        let date = new Date(message.created_at)
        return (
            <li 
            key={message.id}
            className={this.props.currentUser.id === message.user_id ? "sender": "recipient"}>
                <span className="timestamp">{date.toLocaleString()}</span>
                <span className="message-text">{message.message}</span>
            </li>
        );
    }

    render() {
        const messages = this.getRoomMessages();
        return (
            <div>
                <div className="message-list">
                    <ul>
                        {messages.map(message => this.classifyMessage(message))}
                    </ul>
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el }}>
                </div>
            </div>
        )
    }
}
