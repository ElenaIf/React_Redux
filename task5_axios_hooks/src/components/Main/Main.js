import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import AnimalsList from "../Animals/AnimalsList";
import NewAnimal from "../Animals/NewAnimal";
import AnimalSingle from "../Animals/AnimalSingle";

const Main = () => {
	const [animals, setAnimals] = useState([]);
	const [newAnimal, setNewAnimal] = useState({
		name: "",
		aclass: "mammals",
		aimage: "",
		description: "",
		// link: "",
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
		<Switch>
			<Route path="/:id">
				<AnimalSingle />
			</Route>
			<Route path="/" exact>
				{" "}
				<AnimalsList animals={animals} />
				<NewAnimal change={valueChangeHandler} submit={submitNewAnimal} />
			</Route>
		</Switch>
	);
};

export default Main;
