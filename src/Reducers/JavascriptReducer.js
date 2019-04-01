import {
  JAVASCRIPT_LIST_ACTION,
  JAVASCRIPT_CHANGE_STATUS_ACTION,
  JAVASCRIPT_REMOVE_ACTION
} from "../constants";

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case JAVASCRIPT_LIST_ACTION:
      return {
        ...state,
        data: action.payload
      };
    case JAVASCRIPT_CHANGE_STATUS_ACTION:
      return {
        ...state,
        data: action.payload
      };
    case JAVASCRIPT_REMOVE_ACTION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
