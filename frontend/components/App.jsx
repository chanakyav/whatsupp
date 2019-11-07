import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from "./header/header";
import Welcome from "./welcome/welcome";
import Dashboard from "./dashboard/dashboard";

const App = () => (
    <div className="main-container">
        <Header />
        <div className="content-container">
            <Switch>
                <AuthRoute exact path="/" component={Welcome}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    </div>
);

export default App;