import React, { Component } from 'react'
import Messages from './messages';

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
                    <input 
                        type="text" 
                        placeholder="Type a message"
                    />
                </div>
            </div>
        )
    }
}
