import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  allProject: [],
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PROJECT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        allProject: [],
      };
    }
    case types.GET_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        allProject: payload,
      };
    }
    case types.GET_PROJECT_FALIURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        allProject: [],
      };
    }
    case types.POST_PROJECT_REQUEST:{
      return {
        ...state,
        isLoading : true,
        isError : false,

      }
    }
    case types.POST_PROJECT_SUCCESS :{
      
      return {
        ...state,
        isLoading : false,
        isError : false,
        allProject : [...state.allProject, payload]
      }
    }
    case types.POST_PROJECT_FALIURE: {
      return {
        ...state,
        isLoading : false,
        isError : true 
      }
    }
  case types.DELETE_PROJECT_SUCCESS: {
      console.log(payload);
      const updatedProject = state.allProject.filter(
        (item) => item._id !== payload.deletedProject._id
      );
      // console.log(updatedProject)
      return {
        ...state,
        isLoading : false,
        isError : false,
        allProject: [...updatedProject],
      };
    }
    case types.DELETE_PROJECT_FALIURE :{
      return {
        ...state,
        isError : true,
      }
    }

    default: {
      return state;
    }
  }
};
