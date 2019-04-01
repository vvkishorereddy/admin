import { combineReducers } from "redux";
import JavascriptReducer from "./JavascriptReducer";

export default combineReducers({
  JavascriptQuestionAnswer: JavascriptReducer
});
