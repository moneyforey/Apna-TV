import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { authSignupReducer } from "./signup/sign.reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  singup: authSignupReducer

});
// const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSe__ || compose;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
