import React, { Component } from 'react'

export default class Profile extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div className="profile-container">
                <div className="sidenav-header">
                    <button id="closebtn" onClick={() => this.closeNav()}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <span>Profile</span>
                    
                </div>
                <div>
                </div>
            </div>
        )
    }
}
