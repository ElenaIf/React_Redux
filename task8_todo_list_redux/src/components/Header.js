import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<h1>Notes to myself</h1>
				<p>
					I have currently <span className="number-of-notes">0</span> notes
				</p>
			</header>
		);
	}
}

export default Header;
