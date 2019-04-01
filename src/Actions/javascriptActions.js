import { JAVASCRIPT_LIST_ACTION } from "../constants";

const data = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: `JavaScript is a client-side as well as server side scripting language
    that can be inserted into HTML pages and is understood by web browsers.
    JavaScript is also an Object based Programming language`,
    status: true
  },
  {
    id: 2,
    question: "What is JavaScript List?",
    answer: `List JavaScript is a client-side as well as server side scripting language ofetr
    that can be inserted into HTML pages and is understood by web browsers.
    JavaScript is also an Object based Programming language`,
    status: false
  }
];

const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/vvkishorereddy/admin/master/public/data/jqa.json"
  );
  return await response.json();
};

export const lisItems = () => async (dispatch, getState) => {
  const response = await fetchData();

  dispatch({
    type: JAVASCRIPT_LIST_ACTION,
    payload: response
  });
};
