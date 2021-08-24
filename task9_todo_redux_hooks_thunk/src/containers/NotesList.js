import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/actions";

const NotesList = () => {
	// we should say what we take from the state.
	const notes = useSelector((state) => state);
	const dispatch = useDispatch();

	const toggleNote = (id) => ({
		type: actionTypes.TOGGLE_NOTE,
		id: id,
	});

	// const texts = useSelector((state) => state.texts);

	return (
		<>
			<ul>
				{notes.map((note) => (
					<li
						key={note.id}
						onClick={() => dispatch(toggleNote(note.id))}
						className={note.completed ? "item-text strike" : "item-text"}
					>
						{note.text}
					</li>
				))}
			</ul>
			{/* we can have second list here. It comes from the same state. */}
			{/* <ul>
				{texts.map((text) => (
					<li key={text.id}>{text.text}</li>
				))}
			</ul> */}
		</>
	);
};

export default NotesList;
