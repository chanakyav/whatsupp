import React, { Component } from 'react'
import Profile from '../profile/profile'
import ChatBoxContainer from '../chatbox/chatbox_container';
import ContactsContainer from '../contacts/contacts_container'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div id="mySidenav" className="sidenav">
                    <Profile/>
                </div>
                <div className="left-pane">
                    <ContactsContainer/>
                </div>
                <ChatBoxContainer/>
            </div>
        )
    }
}
