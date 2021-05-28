import React from "react";
import { Link } from "react-router-dom";

import "./AnimalCard.css";

const AnimalCard = ({ name, link, aclass, description, aimage }) => {
	const truncate = (str, words) => {
		return str.split(" ").splice(0, words).join(" ");
	};
	return (
		<div className="animalCard">
			<h2>{name}</h2>
			<h3>Class: {aclass}</h3>
			<img src={aimage} alt={name} />
			<p>{truncate(description, 30)}...</p>

			<Link to={`/${link}`}>
				{" "}
				Read more
				{/* <a href={link}>Read more</a> */}
			</Link>
		</div>
	);
};

export default AnimalCard;
