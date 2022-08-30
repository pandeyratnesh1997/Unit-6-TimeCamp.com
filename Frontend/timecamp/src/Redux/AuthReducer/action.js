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
    .post("https://blooming-sea-03900.herokuapp.com/user/register", payload)
    .then((response) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      return response;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE })
      return err.data;
    });
};



export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://blooming-sea-03900.herokuapp.com/user/login", payload)
    .then((response) =>{
      dispatch({ type: LOGIN_SUCCESS, payload: response.data })
      return {...response,LOGIN_SUCCESS};
    }
    )
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE })
      return LOGIN_FAILURE;
    })
    
};
