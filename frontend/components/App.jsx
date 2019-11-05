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
    <div>
        <header>
            <Link to="/">
                <img src="https://nick-2018.s3.amazonaws.com/logo.png" />
                <h1>WhatsUpp</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
);

export default App;