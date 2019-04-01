import {
  JAVASCRIPT_LIST_ACTION,
  JAVASCRIPT_CHANGE_STATUS_ACTION,
  JAVASCRIPT_REMOVE_ACTION
} from "../constants";

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

export const changeStatus = (id, fromStatus) => async (dispatch, getState) => {
  const response = await fetchData();
  const data = response.map(row => {
    row["status"] = row.id === id ? !fromStatus : row["status"];
    return row;
  });
  dispatch({
    type: JAVASCRIPT_CHANGE_STATUS_ACTION,
    payload: data
  });
};

export const removeItem = id => async (dispatch, getState) => {
  const response = await fetchData();
  const data = response.filter(row => row.id !== id);
  dispatch({
    type: JAVASCRIPT_REMOVE_ACTION,
    payload: data
  });
};
