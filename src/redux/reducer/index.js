import { combineReducers } from "redux";
import CarReducer from "./CarReducer";

const reducers = combineReducers({
  car: CarReducer,
});

export default reducers;
