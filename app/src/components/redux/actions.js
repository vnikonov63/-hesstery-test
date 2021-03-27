import * as actionTypes from "./action-types.js";

export function startAllPokemons() {
  return async function (dispatch) {
    try {
      dispatch(toggleMPLoading());
      const result = await fetch("https://api.pokemontcg.io/v1/cards");
      const finalResult = await result.json();
      dispatch(setAllPokemons(finalResult.cards));
      dispatch(toggleMPLoading());
    } catch (error) {
      dispatch(setMPError());
      dispatch(toggleMPLoading());
    }
  };
}

export function setAllPokemons(pokemons) {
  return {
    type: actionTypes.SET_MANY_POKEMONS,
    payload: {
      pokemons,
    },
  };
}

export function setMPError() {
  return {
    type: actionTypes.SET_MAIN_PAGE_ERROR,
  };
}

export function removeMPError() {
  return {
    type: actionTypes.REMOVE_MAIN_PAGE_ERROR,
  };
}

export function toggleMPLoading() {
  return {
    type: actionTypes.TOGGLE_MAIN_PAGE_LOADING,
  };
}
