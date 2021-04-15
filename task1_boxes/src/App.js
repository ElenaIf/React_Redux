import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
	return (
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	);
}

export default App;
