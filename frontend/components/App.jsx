import React from "react";
import GreetingContainer from './greeting/greeting_container'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="main-container">
        <div className="header-wrapper">
            <header className="main-nav">
                <nav className="nav-left">
                    <ul >
                        <li>
                            <Link className="nav-item" to="/">
                                <img className="logo-img" src="https://nick-2018.s3.amazonaws.com/whatsupp-logo.png" />
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-item logo" to="/">
                                <span className="nav-btn">whatsupp web</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <GreetingContainer/>
            </header>
        </div>
        <div className="content-container">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            </Switch>
        </div>
    </div>
);

export default App;