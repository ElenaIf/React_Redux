import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.DECREASE:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.RESET:
			return {
				...state,
				counter: 0,
			};
		case actionTypes.ADD5:
			return {
				...state,
				counter: state.counter + action.value,
			};
		case actionTypes.REMOVE5:
			return {
				...state,
				counter: state.counter - action.value,
			};
		case actionTypes.STORE_RESULTS:
			return {
				...state,
				results: state.results.concat({
					id: Math.random(),
					value: state.counter,
				}),
			};
		case actionTypes.REMOVE_ITEM:
			const updateArray = state.results.filter((item) => item.id !== action.item);

			return {
				...state,
				results: updateArray,
			};
		default:
			break;
	}

	// we return the original state if there is no need to update the state.
	return state;
};

const initialState = {
	counter: 0,
	results: [
		{
			id: 1,
			value: 39,
		},
		{
			id: 2,
			value: 64,
		},
		{
			id: 3,
			value: 23,
		},
	],
};

export default reducer;
