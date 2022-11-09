import {  legacy_createStore ,combineReducers,compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    
});
const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSe__ || compose;
const store =  legacy_createStore(rootReducer, applyMiddleware(thunk))