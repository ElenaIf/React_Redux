import React, { Component } from "react";

import "./App.css";

import Form from "./Form/Form";
import View from "./View/View";
import Posts from "./PostsList/PostsList";

class App extends Component {
	state = {
		firstname: "",
		lastname: "",
		phoneNumber: "",
		role: "",
		message: "",
		notes: [],
	};

	componentDidMount() {
		fetch("http://localhost:3001/notes")
			.then((resp) => resp.json())
			.then((data) => this.setState({ notes: data }));
	}

	inputHandler = (input_value) => {
		this.setState({
			[input_value.target.name]: input_value.target.value,
		});
	};

	render() {
		return (
			<div className="container">
				<div className="formAndView">
					<Form inputHandler={this.inputHandler} />
					<View
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						phoneNumber={this.state.phoneNumber}
						role={this.state.role}
						message={this.state.message}
					/>
				</div>
				<Posts notes={this.state.notes} />
			</div>
		);
	}
}

export default App;
