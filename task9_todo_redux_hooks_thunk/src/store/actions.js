import { getAll, createNew, deleteNote, editNote } from "../services/notes";

export const ADD_NOTE = "ADD_NOTE";
export const TOGGLE_NOTE = "TOGGLE_NOTE";
export const INIT_NOTES = "INIT_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";

export const initializeNotes = () => {
	return async (dispatch) => {
		const notes = await getAll();
		dispatch({
			type: INIT_NOTES,
			data: notes,
		});
	};
};

export const createNote = (text) => {
	return async (dispatch) => {
		const newNote = await createNew(text);
		dispatch({
			type: ADD_NOTE,
			data: newNote,
		});
	};
};

export const toggleNote = (id, note) => {
	return async (dispatch) => {
		const toggledNote = await editNote(id, note);
		dispatch({
			type: TOGGLE_NOTE,
			dats: toggledNote,
		});
	};
};

export const onDeleteNote = (id) => {
	return async (dispatch) => {
		await deleteNote(id);
		const notes = await getAll();
		dispatch({
			type: DELETE_NOTE,
			data: notes,
		});
	};
};
