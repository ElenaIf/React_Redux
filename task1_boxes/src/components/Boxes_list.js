import React, { Component } from "react";

import Box from "./Box";

class Boxes_list extends Component {
	state = {
		persons: [
			{
				id: 1,
				name: "Elena",
				age: 33,
				title: "CEO",
			},
			{
				id: 2,
				name: "Toni",
				age: 33,
				title: "Engineer",
			},
			{
				id: 3,
				name: "Petrovich",
				age: 50,
				title: "Cleaner",
			},
		],
		animals: [
			{
				id: 1,
				name: "Fox",
				pic: "",
			},
			{
				id: 2,
				name: "Rabbit",
				pic: "",
			},
			{
				id: 3,
				name: "Wolf",
				pic: "",
			},
		],
	};

	clickHere = () => {
		this.setState({
			persons: [
				{
					id: 1,
					name: "No name here, sorry",
					age: 100,
					title: "No title",
				},
				{
					id: 2,
					name: "No nanem here",
					age: 150,
					title: "No title",
				},
				{
					id: 3,
					name: "Also no name",
					age: 350,
					title: "Nothing",
				},
			],
		});
	};

	render() {
		return (
			<section>
				<h2>Boxes</h2>
				{this.state.persons.map((i) => {
					return <Box name={i.name} age={i.age} title={i.title} key={i.id} />;
				})}

				<button onClick={this.clickHere}>Click here also</button>

				{/* no need to do boxes manually any more */}
				{/* <Box
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					title={this.state.persons[0].title}
				/>
				<Box
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					title={this.state.persons[1].title}
				/>
				<Box
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
					title={this.state.persons[2].title}
				/> */}
			</section>
		);
	}
}

export default Boxes_list;
