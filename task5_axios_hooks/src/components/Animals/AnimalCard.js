import React from "react";
import "./AnimalCard.css";

const AnimalCard = ({ name, link, aclass, description, aimage }) => {
	// const truncate = (str, words) => {
	// 	return str.split(" ").splice(0, words).join(" ");
	// };
	return (
		<div className="animalCard">
			<h2>{name}</h2>
			<h3>Class: {aclass}</h3>
			<img src={aimage} alt={name} />
			{/* <p>{truncate(description, 30)}...</p> */}
			<p>{description}</p>
			<p>
				<a href={link}>Read more</a>
			</p>
		</div>
	);
};

export default AnimalCard;
