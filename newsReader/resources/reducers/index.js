import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { topHeadlinesReducer } from "./topHeadlinesReducer";

const allReducers = combineReducers({
   newsReducer,
   topHeadlinesReducer 
});
export default allReducers;