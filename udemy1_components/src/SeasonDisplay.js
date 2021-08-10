import React from "react";

class SeasonDisplay extends React.Component {
	// one of the ways to initialize state. Function is specific to JS language.  Thi function will be called first
	constructor(props) {
		super(props);

		this.state = { lattitude: null, errorMessage: "" }; // we don't know what is the number for lattitude yet

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we call setState
				this.setState({ lattitude: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// render has to be defined, it returnes jsx. It is required by React
	render() {
		if (this.state.errorMessage && !this.state.lattitude) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lattitude) {
			return <div>Lattitude: {this.state.lattitude}</div>;
		}

		return <div>Loading...</div>;

		// return (
		// 	<div>
		// 		Lattitude: {this.state.lattitude}
		// 		<br />
		// 		Error: {this.state.errorMessage}
		// 	</div>
		// );
	}
}

export default SeasonDisplay;
