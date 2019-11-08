import React, { Component } from 'react'

export default class Profile extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div className="profile-container">
                <div className="sidenav-header">

                    <span className="closebtn" onClick={() => this.closeNav()}>
                        <i class="lni-arrow-left"></i>
                    </span>
                    <span>Profile</span>
                    
                </div>
                <div>
                </div>
            </div>
        )
    }
}
