import React, { Component } from 'react'

export default class Profile extends Component {

    closeNav() {
        document.getElementById("mySidenav").style.width = "0"
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
                <div className="profile-content">
                    <div className="profile-picture">
                        <div>
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div>
                            <i className="fas fa-camera"></i>
                        </div>
                        <p>Add profile photo</p>
                    </div>
                    <div className="profile-name-about">
                        <ul>
                            <li>Your Name</li>
                            <li id="edit-name">
                                <input type="text" 
                                    value={`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}/>
                                <i className="fas fa-pen"></i>
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                    <div className="profile-name-about">
                        <ul>
                            <li>About</li>
                            <li id="edit-name">
                                <input type="text" placeholder="Available"/>
                                <i className="fas fa-pen"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		);
    }
}
