import React, { Component } from 'react'
import Messages from './messages';
import MessageInputContainer from './message_input_container';

export default class ChatBox extends Component {
    componentDidMount() { 
        this.props.fetchMessages(this.props.currentUser.id)
    }
    render() {
        return (
            <div className="chatbox-container">
                <div className="chatbox-header">
                    <span>ChatBox</span>
                </div>
                <div className="message-box">
                    <Messages messages={this.props.messages} activeRoom={this.props.activeRoom}/>
                </div>
                <div className="message-input">
                    <MessageInputContainer/>
                </div>
            </div>
        )
    }
}
