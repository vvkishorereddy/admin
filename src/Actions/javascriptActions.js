import {
  JAVASCRIPT_LIST_ACTION,
  JAVASCRIPT_CHANGE_STATUS_ACTION,
  JAVASCRIPT_REMOVE_ACTION
} from "../constants";

import firebase from "../Firebase";

const fetchData = async () => {
  const firebaseresponse = await firebase
    .firestore()
    .collection("javascript")
    .get();
  const data = [];
  firebaseresponse.forEach(doc => {
    let tmp = {
      ...doc.data(),
      id: doc.id
    };
    data.push(tmp);
  });
  return data;

  const response = await fetch(
    "https://raw.githubusercontent.com/vvkishorereddy/admin/master/public/data/javascript.json"
  );
  return await response.json();
};

const updateStatus = async (id, fromStatus) => {
  const firebaseresponse = await firebase
    .firestore()
    .collection("javascript")
    .doc(id)
    .update({ status: !fromStatus });
  console.log(firebaseresponse, 8541);
  return firebaseresponse;
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
