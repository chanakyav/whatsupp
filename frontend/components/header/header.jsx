import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

const Header = () => {
    return (
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
    )
}

export default Header
