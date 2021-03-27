import * as actionTypes from "./action-types.js";

const initialState = {
  isError: false,
  isLoading: false,
  pokemon: {},
};

export default function singlePokemonReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.SET_SINGLE_POKEMON:
      return {
        ...state,
        pokemon: payload.pokemon,
      };
    case actionTypes.SET_SINGLE_ERROR:
      return {
        ...state,
        isError: true,
      };
    case actionTypes.REMOVE_SINGLE_ERROR:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.TOGGLE_SINGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}
