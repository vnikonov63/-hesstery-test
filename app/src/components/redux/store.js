import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import mainPageReducer from "./reducerMainPage";

import thunkMiddleware from "redux-thunk";

const store = createStore(
  combineReducers({
    mainPage: mainPageReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
