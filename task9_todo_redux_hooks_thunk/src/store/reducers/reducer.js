import * as actionTypes from "../actions";

/* we could also use state=[] if the reducer was very small, for example only for time or date. Then there can be just one object. And we can refer to that as just state, no state.notes or state.texts */
const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.ADD_NOTE:
			return state.concat({
				id: action.id + 1,
				text: action.text,
				completed: action.completed,
			});
		case actionTypes.TOGGLE_NOTE:
			const noteToChange = state.find((n) => n.id === action.id);
			const changeNote = { ...noteToChange, completed: !noteToChange.completed };
			return state.map((note) => (note.id !== action.id ? note : changeNote));
		default:
			return state;
	}
};

/* const initialState = {
	notes: [
		{
			id: 1,
			text: "hello world note!",
			completed: false,
		},
		{
			id: 2,
			text: "Second note",
			completed: false,
		},
	],

	texts: [
		{
			id: 1,
			text: "This is text 1 for text purposes",
			completed: false,
		},
		{
			id: 2,
			text: "This is text 2 for test purposes",
			completed: false,
		},
	],
}; */

export default reducer;
