import React, { Component } from "react";

import "./App.css";

import Form from "./Form/Form";
import View from "./View/View";
import Posts from "./PostsList/PostsList";
import Popup from "./Popup/Popup";

class App extends Component {
	state = {
		notes: [],
		inputData: {
			firstname: "",
			lastname: "",
			phoneNumber: "",
			role: "",
			message: "",
		},
		showPopup: false,
	};

	componentDidMount() {
		fetch("http://localhost:3001/notes")
			.then((resp) => resp.json())
			.then((data) => this.setState({ notes: data }));
	}

	inputHandler = (input_value) => {
		this.setState({
			inputData: { ...this.state.inputData, [input_value.target.name]: input_value.target.value },
		});
	};

	popupHandler = (e) => {
		this.setState({ showPopup: true });
		e.preventDefault();
	};

	sendDataHandler = () => {
		const requestOptions = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(this.state.inputData),
		};
		fetch("http://localhost:3001/notes", requestOptions);
		alert("Note is posted", window.location.reload());
	};

	render() {
		return (
			<div className="container">
				<div className="formAndView">
					<Form inputHandler={this.inputHandler} submit={this.popupHandler} />
					<View {...this.state.inputData} />
				</div>

				<Posts notes={this.state.notes} />
				{this.state.showPopup === true && (
					<Popup {...this.state.inputData} submit={this.sendDataHandler} />
				)}
			</div>
		);
	}
}

export default App;
