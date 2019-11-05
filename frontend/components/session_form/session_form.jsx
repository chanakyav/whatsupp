import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderUsername() {
        return (
            <div>
                <label>First Name:
                    <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')} />
                </label>
                <br/>
                <label>Last Name:
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')} />
                </label>
            </div>
        )
    }

    renderLogin() {
        return (
            <div>
                <label>Phone Number:
                            <input type="text"
                        value={this.state.phone_number}
                        onChange={this.update('phone_number')}
                    />
                </label>
                <br/>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <br/>
                <input type="submit" value={this.props.formType} />
            </div>
        );
    }

    renderForm() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    {this.renderUsername()}
                    {this.renderLogin()}
                </div>
            );
        } 
        return (
            <div>{this.renderLogin()}</div>
        );      
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Welcome to WhatsUpp!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <br/>
                    {this.renderForm()}
                </form>
            </div>
        );
    }
}

export default SessionForm;
