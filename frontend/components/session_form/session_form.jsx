import React from 'react';
import { Link } from "react-router-dom";

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
                <div className="text-box">
                    {/* <i className="user icon"></i> */}
                    <input type="text"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.update('first_name')} />
                    <span data-placeholder="First Name"></span>
                </div>
                <div className="text-box">
                    {/* <i className="user icon"></i> */}
                    <input type="text"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.update('last_name')} />
                    <span data-placeholder="First Name"></span>
                </div>
            </div>
        )
    }

    renderLogin() {
        return (
            <div>
                <div className="text-box">
                    {/* <i className="phone icon"></i> */}
                    <input type="text"
                        placeholder="Phone Number"
                        value={this.state.phone_number}
                        onChange={this.update('phone_number')} />
                    <span data-placeholder="Phone Number"></span>
                </div>
                <div className="text-box">
                    {/* <i className="lock icon"></i> */}
                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    <span data-placeholder="Password"></span>
                </div>
                <input className="session-submit" type="submit" value={this.props.formType} />
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
            <div className="login-box">
                <p >Welcome to WhatsUpp!</p>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                    <h1>{this.props.formType}</h1>
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <br/>
                    {this.renderForm()}
                </form>
            </div>
        );
    }
}

export default SessionForm;
