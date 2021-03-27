import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import mainPageReducer from "./reducerMainPage";
import singlePokemonReducer from "./reducerSinglePokemon";

import thunkMiddleware from "redux-thunk";

const store = createStore(
  combineReducers({
    mainPage: mainPageReducer,
    specificPokemon: singlePokemonReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
