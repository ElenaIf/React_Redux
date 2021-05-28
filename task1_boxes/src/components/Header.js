import React from "react";

import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<NavLink to="/boxes">Boxes</NavLink>
				</li>
				<li>
					<NavLink to="/animals">Animals</NavLink>
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
