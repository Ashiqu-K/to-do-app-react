import { combineReducers } from "redux";
import toDoReducer from "./ToDo/reducer";

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

export default rootReducer;
