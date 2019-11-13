import React, { Component } from 'react'

export default class ChatBox extends Component {
    render() {
        return (
            <div className="chatbox-container">
                <div className="chatbox-header">
                    <span>ChatBox</span>
                </div>
                <div className="message-box">
                    Messages
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
