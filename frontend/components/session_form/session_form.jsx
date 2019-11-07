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
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
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

    handleInputFocus(e) {
        $(e.target).addClass("focus")
    }

    handleInputBlur(e) {
        let ib = $(e.target);
        if (ib.val() === "") ib.removeClass("focus");
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
                    <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                        onFocus={this.handleInputFocus} 
                        onBlur={this.handleInputBlur} />
                    <span data-placeholder="First Name"></span>
                </div>
                <div className="text-box">
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        onFocus={this.handleInputFocus} 
                        onBlur={this.handleInputBlur}/>
                    <span data-placeholder="First Name"></span>
                </div>
            </div>
        )
    }

    renderLogin() {
        return (
            <div>
                <div className="text-box">
                    <input type="text"
                        value={this.state.phone_number}
                        onChange={this.update('phone_number')}
                        onFocus={this.handleInputFocus} 
                        onBlur={this.handleInputBlur} />
                    <span data-placeholder="Phone Number"></span>
                </div>
                <div className="text-box">
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        onFocus={this.handleInputFocus} 
                        onBlur={this.handleInputBlur}/>
                    <span data-placeholder="Password"></span>
                </div>
                <div className="session-submit">
                    <input className="submit-btn" type="submit" value={this.props.formType} />
                </div>
            </div>
        );
    }

    renderForm() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    <h1>Create your account</h1>
                    {this.renderUsername()}
                    {this.renderLogin()}
                </div>
            );
        } 
        return (
            <div>
                <h1>Log in to WhatsUpp</h1>
                {this.renderLogin()}
            </div>
        );      
    }

    render() {
        return (
            <div className="login-box">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderForm()}
                    {this.renderErrors()}
                </form>     
            </div>
        );
    }
}

export default SessionForm;
