import React, { Component } from 'react'

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let messageData = {
            room_id: this.props.activeRoom.id,
            user_id: this.props.currentUser.id,
            message: this.state.message
        };
        this.props.createMessage(messageData);
        this.setState({message: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.message}
                    onChange={(e) => this.setState({message: e.currentTarget.value})}
                    placeholder="Type a message"
                />
            </form>
        )
    }
}
