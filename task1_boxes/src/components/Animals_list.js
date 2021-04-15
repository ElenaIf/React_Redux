import React, { Component } from "react";
import Animal from "./Animal";
import SearchBox from "./SearchBox/SearchBox";

// can rename the variable also - {animals as animals_for_search}
import { animals } from "./animals";

class Animals_list extends Component {
	state = {
		animals: animals,
		searchInput: "",
	};

	clickHandler = (animal_name) => {
		alert("Hello, my name is " + animal_name);
	};

	searchValueHandler = (searchEvent) => {
		this.setState({
			searchInput: searchEvent.target.value,
		});
	};

	render() {
		const animalFilter = this.state.animals.filter((animal) => {
			return animal.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
		});

		return (
			<div>
				<SearchBox search={this.searchValueHandler} />
				<p>{this.state.searchInput}</p>
				<div className="animal_list">
					{/* Always these brackets when write JS*/}
					{animalFilter.map((animal_el) => {
						return (
							<Animal
								name={animal_el.name}
								img={animal_el.img}
								key={animal_el.name}
								// say_name={() => this.clickHandler(animal_el.name)}
								say_name={this.clickHandler.bind(this, animal_el.name)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Animals_list;
