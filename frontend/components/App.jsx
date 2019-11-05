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

const App = () => (
    <div>
        <header>
            <img src="https://nick-2018.s3.amazonaws.com/logo.png" />
            <h1>WhatsUpp</h1>
            <GreetingContainer />
        </header>
        
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;