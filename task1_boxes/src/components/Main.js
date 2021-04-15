import React from "react";
import Boxes_list from "./Boxes_list";
import Animals_list from "./Animals_list";

import { Switch, Route } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
};

const Main = () => {
	return (
		<main>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/boxes" component={Boxes_list} />
				<Route path="/animals" component={Animals_list} />
			</Switch>
		</main>
	);
};

export default Main;
