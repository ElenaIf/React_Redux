import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote, onDeleteNote } from "../store/actions";

const NotesList = () => {
	// we should say what we take from the state.
	const notes = useSelector((state) => state);
	const dispatch = useDispatch();

	// const texts = useSelector((state) => state.texts);

	return (
		<ul>
			{notes.map((note) => (
				<li
					key={note.id}
					onClick={() => dispatch(toggleNote(note.id))}
					className={note.completed ? "item-text strike" : "item-text"}
				>
					{note.text}
					<span className="close-buttton" onClick={() => dispatch(onDeleteNote(note.id))}>
						X
					</span>
				</li>
			))}
		</ul>
	);
};

export default NotesList;
