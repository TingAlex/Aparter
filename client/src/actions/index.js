import axios from "axios";
import { SubmissionError } from "redux-form";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
};

export const submitLogin = (value, history) => async dispatch => {
  const res = await axios.post("/api/login", value);
  if (res.data.message) {
    // dispatch({ type: "LOGIN_ERROR", payload: res.data });
    console.log("error message " + res.data.message);
  } else {
    history.push("/");
    dispatch({ type: "FETCH_USER", payload: res.data });
  }
};

export const submitSignup = (value, history) => async dispatch => {
  // console.log("get submit signup " + JSON.stringify(value));
  const res = await axios.post("/api/signup", value);
  console.log("after sign up " + JSON.stringify(res.data));
  history.push("/login");
  dispatch({ type: "FETCH_USER", payload: res.data });
};

export const fetchPics = () => async dispatch => {
  const res = await axios.get("/api/game_pics");
  dispatch({
    type: "FETCH_PICS",
    payload: res.data
  });
};

export const setPlayPic = picName => dispatch => {
  dispatch({
    type: "SET_PLAYPIC",
    payload: {
      picName
    }
  });
};

export const reArrange = index => dispatch => {
  dispatch({
    type: "MOVE_PIC",
    payload: {
      index
    }
  });
};

export const readyPlay = () => dispatch => {
  dispatch({
    type: "READY_PLAY"
  });
};
