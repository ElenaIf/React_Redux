import React, { useState, useEffect } from "react";
import AnimalsList from "../Animals/AnimalsList";
import NewAnimal from "../Animals/NewAnimal";
import axios from "axios";

const Main = () => {
	const [animals, setAnimals] = useState([]);
	const [newAnimal, setNewAnimal] = useState({
		name: "",
		aclass: "mammals",
		aimage: "",
		description: "",
		link: "",
	});

	useEffect(() => {
		axios.get("http://localhost:3001/animals").then((res) => setAnimals(res.data));
	}, []);

	const valueChangeHandler = (e) => {
		setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
	};

	const submitNewAnimal = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/animals", newAnimal)
			.then(() => {
				return axios.get("http://localhost:3001/animals");
			})
			.then((res) => setAnimals(res.data));
		e.target.reset();
	};

	return (
		<main>
			<p>Main area </p>
			<AnimalsList animals={animals} />
			<NewAnimal change={valueChangeHandler} submit={submitNewAnimal} />
		</main>
	);
};

export default Main;
