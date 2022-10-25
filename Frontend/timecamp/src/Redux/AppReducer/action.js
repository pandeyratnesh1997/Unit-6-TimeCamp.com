import * as types from "./actionTypes";
import axios from "axios";

export const getProject = () => async (dispatch) => {
  dispatch({ type: types.GET_PROJECT_REQUEST });

  const headers = {
    authorization: `${localStorage.getItem("TimeCampToken")}`,
  };
  try {
    let response = await axios.get(
      "https://blooming-sea-03900.herokuapp.com/project/task",
      {
        headers,
      }
    );
    // console.log(response);
    dispatch({ type: types.GET_PROJECT_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_PROJECT_FALIURE });
  }
};

export const postProject = (payload) => (dispatch) => {
  dispatch({ type: types.POST_PROJECT_REQUEST });

  return axios
    .post("https://blooming-sea-03900.herokuapp.com/project/task", payload, {
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("TimeCampToken")}`,
      },
    })
    .then((response) => {
      return dispatch({
        type: types.POST_PROJECT_SUCCESS,
        payload: response.data.newTask,
      });
    })
    .catch((error) => {
      console.log(error);
      return dispatch({ type: types.POST_PROJECT_FALIURE });
    });
};

export const updateProject = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_PROJECT_REQUEST });

  let id = payload.taskId;
  let task = payload.task;

  return axios
    .patch(
      `https://blooming-sea-03900.herokuapp.com/project/task/${id}/edit`,
      task,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("TimeCampToken")}`,
        },
      }
    )
    .then((response) => {
      console.log(response);
      return dispatch({
        type: types.UPDATE_PROJECT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      return dispatch({ type: types.UPDATE_PROJECT_FALIURE });
    });
};

export const deleteProject = (payload) => (dispatch) => {
  console.log(payload);
  return axios
    .delete("https://blooming-sea-03900.herokuapp.com/project/task", {
      headers: {
        authorization: `${localStorage.getItem("TimeCampToken")}`,
      },
      data: {
        id: payload,
      },
    })
    .then((response) => {
      return dispatch({
        type: types.DELETE_PROJECT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      return dispatch({ type: types.DELETE_PROJECT_FALIURE });
    });
};

export const saveTime = (payload) => async (dispatch) => {
  return axios
    .post("https://blooming-sea-03900.herokuapp.com/timer", payload, {
      headers: {
        authorization: `${localStorage.getItem("TimeCampToken")}`,
        "content-type": "application/json",
      },
    })
    .then((response) => {
      return dispatch({
        type: types.POST_TIME_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      return dispatch({ type: types.POST_TIME_FALIURE });
    });
};
