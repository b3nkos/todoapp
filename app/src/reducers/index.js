import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
  taskReducer,
  menuReducer,
});
