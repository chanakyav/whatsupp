import React, { Component } from 'react'

export default class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        }
    }

    componentDidMount() {
        this.props.fetchContacts(this.props.currentUser.id)
    }

    openNav() {
        document.querySelector("#mySidenav").style.width = "30%";
        // document.querySelector(".left-pane").style.width = "0";
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    render() {
        return (
            <div className="contacts-container">
                <div className="contacts-header">
                    <span id="open-btn" onClick={() => this.openNav()}>
                        <i className="far fa-user-circle"></i>
                    </span>
                    <form className="contact-form">
                        <input 
                            type="text"
                            value={this.state.phoneNumber}
                            placeholder="Phone Number"
                            onChange={this.update('phoneNumber')}/>
                        {/* <span data-placeholder="Phone"></span> */}
                        <input type="submit" value="Add Contact"/>
                    </form>
                </div>
            {this.props.contacts.map(contact => 
                <li key={contact.id}>
                    {contact.first_name}
                </li>)}
            </div>
        )
    }
}
