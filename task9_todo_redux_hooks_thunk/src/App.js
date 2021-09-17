import React, { useEffect } from "react";

import "./App.css";

import NotesList from "./containers/NotesList";
import NewNote from "./containers/NewNote";
import { initializeNotes } from "./store/actions";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeNotes());
	}, [dispatch]);

	return (
		<div>
			<NewNote />
			<NotesList />
		</div>
	);
};

export default App;
