import React from "react";

import "./App.css";

import NotesList from "./containers/NotesList";
import NewNote from "./containers/NewNote";

const App = () => {
	return (
		<div>
			<NewNote />
			<NotesList />
		</div>
	);
};

export default App;
