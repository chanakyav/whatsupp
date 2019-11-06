import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
		<nav className="nav-right">
			<ul>
				<li>
					<Link className="nav-item btnl" to="/login">
						<span className="nav-btn">Login</span>
					</Link>
				</li>
				<li>
					<Link className="nav-item btnl" to="/signup">
						<span className="nav-btn">Sign Up</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
  const personalGreeting = () => (
    <nav className="nav-right">
      {/* <span className="nav-item"><h1 >Hi, {currentUser.first_name}!</h1> </span> */}
      <p className="nav-item nav-btn btnl"><button className="submit-button"onClick={logout}>Log Out</button></p>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;