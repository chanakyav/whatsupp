import React, { Component } from 'react'

export default class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts(this.props.currentUser.id)
    }

    openNav() {
        document.querySelector("#mySidenav").style.width = "30%";
        // document.querySelector(".left-pane").style.width = "0";
    }
    
    render() {
        return (
            <div className="contacts-container">
                <div className="contacts-header">
                    <span id="open-btn" onClick={() => this.openNav()}>
                        <i className="far fa-user-circle"></i>
                    </span>
                    {/* <span>Contacts</span> */}
                </div>
            {this.props.contacts.map(contact => 
                <li key={contact.id}>
                    {contact.first_name}
                </li>)}
            </div>
        )
    }
}
