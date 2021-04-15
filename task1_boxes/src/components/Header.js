import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/boxes">Boxes</Link>
				</li>
				<li>
					<Link to="/animals">Animals</Link>
				</li>
			</ul>
		</nav>
	);
};

const Header = () => {
	return (
		<header>
			<h1>Logo</h1>
			<Nav />
		</header>
	);
};

export default Header;
