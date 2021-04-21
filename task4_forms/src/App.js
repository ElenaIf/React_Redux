import React, { Component } from "react";

import "./App.css";

import Form from "./Form/Form";
import View from "./View/View";
import Posts from "./PostsList/PostsList";
import Popup from "./Popup/Popup";

class App extends Component {
	state = {
		firstname: "",
		lastname: "",
		phoneNumber: "",
		role: "",
		message: "",
		notes: [],
		showPopup: false,
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

	popupHandler = (e) => {
		this.setState({ showPopup: true });
		e.preventDefault();
	};

	render() {
		return (
			<div className="container">
				<div className="formAndView">
					<Form inputHandler={this.inputHandler} submit={this.popupHandler} />
					<View
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						phoneNumber={this.state.phoneNumber}
						role={this.state.role}
						message={this.state.message}
					/>
				</div>
				<Posts notes={this.state.notes} />
				{this.state.showPopup === true && (
					<Popup
						firstname={this.state.firstname}
						lastname={this.state.lastname}
						phoneNumber={this.state.phoneNumber}
						role={this.state.role}
						message={this.state.message}
					/>
				)}
			</div>
		);
	}
}

export default App;
