import React, { Component } from 'react'

export default class Contacts extends Component {
    openNav() {
        document.querySelector("#mySidenav").style.width = "30%";
    }
    
    render() {
        return (
            <div className="contacts-container">
                <span id="open-btn" onClick={() => this.openNav()}>
                    <i class="far fa-user"></i>
                </span>
                <p>Contacts</p>
            </div>
        )
    }
}
