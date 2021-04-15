import React from "react";

import "./Animal.css";

const Animal = (props) => {
	return (
		<div className="animal_card">
			<h2>{props.name}</h2>
			<div className="animalPicture">
				<img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt={props.name} />
			</div>
			<button onClick={props.say_name}>Click me</button>
		</div>
	);
};

export default Animal;
