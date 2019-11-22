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
        this.demo = {phoneNumber: '9988776655', password: 'password'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
            <div className="errors">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}><i className="fa fa-times-circle"></i>{` ${error}`}</li>
                    ))}
                </ul>
            </div>
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
                    <span data-placeholder="Last Name"></span>
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

    handleDemoLogin(e) {
        e.preventDefault();
        this.setState({phone_number: '9988776655', password: 'password'})
        setTimeout( () => {
            const user = Object.assign({}, this.state);
            this.props.processForm(user);
        }, 2000)
    }

    renderForm() {
        if (this.props.formType === 'signup') {
            return (
                <div className="form-option">
                    <h1>Create your account</h1>
                    <p>Already have an account?  <span>{this.props.navLink}</span></p>
                    {this.renderUsername()}
                    {this.renderLogin()}
                </div>
            );
        } 
        return (
            <div className="form-option">
                <h1>Login to WhatsUpp</h1>
                {this.renderLogin()}
                <div className="session-submit">
                    <input className="submit-btn demo" type="submit" value="Demo Login"
                    onClick={this.handleDemoLogin} />
                </div>
                <p>Don't have an account?  <span>{this.props.navLink}</span></p>
            </div>
        );      
    }

    render() {
        return (
            <div className="login-box">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderForm()}
                    <br/>
                    {this.renderErrors()}
                </form>     
            </div>
        );
    }
}

export default SessionForm;
