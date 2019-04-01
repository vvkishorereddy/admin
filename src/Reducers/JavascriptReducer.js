import { JAVASCRIPT_LIST_ACTION } from "../constants";

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case JAVASCRIPT_LIST_ACTION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
