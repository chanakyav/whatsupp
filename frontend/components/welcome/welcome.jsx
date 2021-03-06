import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="login-box welcome-container">
            {/* <p >Welcome to WhatsUpp!</p> */}
            <div className="welcome-content">
                <div className="welcome-content-left">
                    <div className="features">
                        Simple. Secure. 
                    </div>
                    <div className="features">
                        Reliable messaging.
                    </div>
                    <div className="features2">  
                        With WhatsUpp, you'll get fast, simple, secure messaging available on phones and PC's all over the world.
                    </div>
                </div>
                <div className="welcome-content-right">
                    <img src="https://www.zapptales.com/wp-content/uploads/2016/05/free-easter-mockup-generator-psd-1-3.png" alt="" srcset=""/>
                    <div className="features3">
                        <div>
                            Explore Features
                        </div>

                        <Link to="/signup">
                            <div>
                                Try Now!
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
