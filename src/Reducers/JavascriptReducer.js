import { JAVASCRIPT_LIST_ACTION, JAVASCRIPT_ADD_ACTION } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case JAVASCRIPT_LIST_ACTION:
      return {
        ...state,
        js_qa_list: action.payload
      };
    case JAVASCRIPT_ADD_ACTION:
      return {
        ...state,
        js_qa_list: action.payload
      };
    default:
      return state;
  }
};
