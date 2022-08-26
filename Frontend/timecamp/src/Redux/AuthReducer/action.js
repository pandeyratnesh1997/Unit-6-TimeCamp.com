// write action logic for login redux

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post("http://localhost:5000/user/register", payload)
    .then((response) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      return SIGNUP_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE })
      return SIGNUP_FAILURE;
    });
};



export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("http://localhost:8080/user/login", payload)
    .then((response) =>
      dispatch({ type: LOGIN_SUCCESS, payload: response.data })
    )
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};
