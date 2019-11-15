import React, { Component } from 'react';
import { ActionCable } from "react-actioncable-provider";

export default class Messages extends Component {

    constructor(props) {
        super(props);
        this.handleReceived = this.handleReceived.bind(this);
        this.state = {
            newMessage: ''
        };
    }

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

    componentDidMount() {
        this.messagesEnd.scrollIntoView();
    }

    componentDidUpdate() {   
        this.messagesEnd.scrollIntoView();
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

    handleReceived(message) {        
        console.log(message);
        
        this.setState({newMessage: message.message})
        this.props.addMessage(message);
    }

    render() {
        const messages = this.getRoomMessages();
        return (
            <div>
                <ActionCable
                    key={this.props.activeRoom.id}
                    channel={{channel: 'RoomChannel', room_id: this.props.activeRoom.id}}
                    onReceived={this.handleReceived}    
                />
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
