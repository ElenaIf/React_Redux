import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	);
};

export default App;
