import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import numberBasicReducer from "./reducers";

import thunkMiddleware from "redux-thunk";

const store = createStore(
  combineReducers({
    numberBasic: numberBasicReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
