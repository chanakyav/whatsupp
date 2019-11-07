import React, { Component } from 'react'
import Profile from '../profile/profile'
import ChatBox from '../chatbox/chatbox'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <Profile/>
                <ChatBox/>
            </div>
        )
    }
}
