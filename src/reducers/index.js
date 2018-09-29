import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import playerReducer from "./playerReducer.js";

export default combineReducers({
  user: userReducer,
  player: playerReducer
})
