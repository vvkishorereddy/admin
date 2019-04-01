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

export const lisItems = () => {
  return {
    type: JAVASCRIPT_LIST_ACTION,
    payload: data
  };
};
