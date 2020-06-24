import {combineReducers} from "redux";
import search from "./search";
import paginate from "./pagination";

export default combineReducers({
	search,
	paginate,
});
