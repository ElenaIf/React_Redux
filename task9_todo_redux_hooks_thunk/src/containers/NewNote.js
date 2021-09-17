import React from "react";

import { useDispatch } from "react-redux";
import { createNote } from "../store/actions";

const NewNote = () => {
	const dispatch = useDispatch();

	// we need curly brackets so that it looks like an object, not function
	const addNote = async (someTextInInput) => {
		someTextInInput.preventDefault();
		const text = someTextInInput.target.noteInput.value;
		dispatch(createNote(text));
		someTextInInput.target.noteInput.value = "";
	};

	return (
		<form onSubmit={addNote}>
			<input type="text" name="noteInput" />
			<input type="submit" value="Add note" />
		</form>
	);
};

export default NewNote;
