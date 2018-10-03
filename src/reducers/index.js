
import { combineReducers } from "redux";
import  fetchDataReducer from "./ReducerFetchData";

const rootReducer = combineReducers({
  data: fetchDataReducer
});

export default rootReducer;