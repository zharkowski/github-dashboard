import {Search} from "../constants";

const initialState = [];

const search = (state = initialState, action) => {
	switch (action.type) {
		case Search.SEARCH:
			return {
				...state,
				data: action.payload,
			};
		case Search.RESET:
			return {
				initialState,
				data: action.payload,
			};
		default:
			return state;
	}
}

export default search;
