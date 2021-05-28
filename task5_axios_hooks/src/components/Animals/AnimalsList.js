import React from "react";

import AnimalCard from "./AnimalCard";

import "./AnimalsList.css";

const AnimalsList = ({ animals }) => {
	return (
		<div className="list">
			{animals.map((animal) => (
				<AnimalCard
					name={animal.name}
					aclass={animal.aclass}
					description={animal.description}
					aimage={animal.aimage}
					key={animal.id}
					link={animal.id}
				/>
			))}
		</div>
	);
};

export default AnimalsList;
