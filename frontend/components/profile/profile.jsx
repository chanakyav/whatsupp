import React, { Component } from 'react'

export default class Profile extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div className="profile-container">
                <div className="sidenav-header">
                    Profile
                </div>
                <div>
                    <span className="closebtn" onClick={() => this.closeNav()}> X</span>
                </div>
            </div>
        )
    }
}
