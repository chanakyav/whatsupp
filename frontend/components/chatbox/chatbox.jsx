import React, { Component } from 'react'
import Messages from './messages';
import MessageInputContainer from './message_input_container';

export default class ChatBox extends Component {
    componentDidMount() { 
        this.props.fetchMessages(this.props.currentUser.id)
    }

    checkActiveContact() {
        if (Object.keys(this.props.activeContact).length === 0) {
            return;
        } else {
            return <span>{`${this.props.activeContact.first_name} ${this.props.activeContact.last_name}`}</span>;
        }
    }

    render() {
        return (
            <div className="chatbox-container">
                <div className="chatbox-header">
                    {this.checkActiveContact()}
                </div>
                <div className="message-box">
                    <Messages 
                        messages={this.props.messages}
                        activeRoom={this.props.activeRoom}
                        currentUser={this.props.currentUser}
                        addMessage={this.props.addMessage}/>
                </div>
                <div className="message-input">
                    <MessageInputContainer/>
                </div>
            </div>
        )
    }
}
