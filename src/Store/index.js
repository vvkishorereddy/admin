import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reducer from "../Reducers";

export default createStore(reducer, {}, applyMiddleware(logger));
