import { JAVASCRIPT_LIST_ACTION } from "../constants";

const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/vvkishorereddy/admin/master/public/data/javascript.json"
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
