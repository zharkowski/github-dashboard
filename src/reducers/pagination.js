import {Pagination} from "../constants";

const initialState = 1;

const paginate = (state = initialState, action) => {
	switch (action.type) {
		case Pagination.CHOOSE_PAGE:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
}

export default paginate;
