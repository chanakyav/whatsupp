import React, { Component } from 'react'
import Profile from '../profile/profile'
import ChatBox from '../chatbox/chatbox'
import Contacts from '../contacts/contacts'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="left-pane">
                    <Profile/>
                    <Contacts/>
                </div>
                <ChatBox/>
            </div>
        )
    }
}
