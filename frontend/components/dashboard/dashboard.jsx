import React, { Component } from 'react'
import Profile from '../profile/profile'
import ChatBox from '../chatbox/chatbox'
import Contacts from '../contacts/contacts'

export default class Dashboard extends Component {

    openNav() {
        document.querySelector("#mySidenav").style.width = "30%";
    }

    render() {
        return (
            <div className="dashboard-container">
                <div id="mySidenav" className="sidenav">
                    <Profile/>
                </div>
                <div className="left-pane">
                    <span id="open-btn" onClick={()=>this.openNav()}> open</span>
                    <Contacts/>
                </div>
                <ChatBox/>
            </div>
        )
    }
}
