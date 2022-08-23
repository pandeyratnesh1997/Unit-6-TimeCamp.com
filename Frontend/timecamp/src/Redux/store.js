import {applyMiddleware, compose, legacy_createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import {reducer as appReducer} from './AppReducer/reducer.js'
import {reducer as authReducer} from './AuthReducer/reducer.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({appReducer, authReducer})

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));