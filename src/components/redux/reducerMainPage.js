import * as actionTypes from "./action-types.js";

const initialState = {
  pokemons: [],
  isError: false,
  isLoading: false,
};

export default function mainPageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.SET_MANY_POKEMONS:
      return {
        ...state,
        pokemons: payload.pokemons.map((pokemon) => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.imageUrl,
          };
        }),
      };
    case actionTypes.SET_MAIN_PAGE_ERROR:
      return {
        ...state,
        isError: true,
      };
    case actionTypes.REMOVE_MAIN_PAGE_ERROR:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.TOGGLE_MAIN_PAGE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}
