import React, { Component } from 'react'

export default class Profile extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.querySelector(".left-pane").style.width = "30%";
    }
    render() {
        return (
            <div className="profile-container">
                <div className="sidenav-header">
                </div>
                <div className="sidenav-header">
                    <button id="closebtn" onClick={() => this.closeNav()}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <span>Profile</span>
                </div>
            </div>
        )
    }
}
