import React from "react";

import * as ActionTypes from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

const NewNote = () => {
	const allNotes = useSelector((state) => state);
	const dispatch = useDispatch();

	let i = allNotes.length;

	// we need curly brackets so that it looks like an object, not function
	const addNote = (someTextInInput) => ({
		type: ActionTypes.ADD_NOTE,
		id: i++,
		text: someTextInInput,
		completed: false,
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				dispatch(addNote(event.target.noteInput.value));
				event.target.noteInput.value = "";
			}}
		>
			<input type="text" name="noteInput" />
			<input type="submit" value="Add note" />
		</form>
	);
};

export default NewNote;
