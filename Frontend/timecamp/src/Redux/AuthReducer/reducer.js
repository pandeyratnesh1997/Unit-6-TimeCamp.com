// write reducer logic for login redux

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

const initialState = {
    isAuth:false,
    isLoading:false,
    isError:false,
    token:"",
    data:{},
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case SIGNUP_REQUEST: {
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading:false,
                isError:false,
                data: payload
            }
        }
        case SIGNUP_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case LOGIN_REQUEST : {
            return {
                ...state,
                isLoading:true,
                isError: false,

            }
        }
        case LOGIN_SUCCESS : {
            return{
                ...state,
                isLoading:false,
                isError:false,
                token:payload,
            }
        }
        case LOGIN_FAILURE : {
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        default : {
            return state;
        }
    }
} 