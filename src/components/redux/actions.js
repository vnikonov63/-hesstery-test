import * as actionTypes from "./action-types.js";

// Main Page
export function startAllPokemons() {
  return async function (dispatch) {
    try {
      dispatch(removeMPError());
      dispatch(toggleMPLoading());
      const result = await fetch("https://api.pokemontcg.io/v1/cards");
      const finalResult = await result.json();
      dispatch(setAllPokemons(finalResult.cards));
      dispatch(toggleMPLoading());
    } catch (error) {
      console.log(error);
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

// Single Pokemon
export function startPokemon(pokemonId) {
  return async function (dispatch) {
    try {
      dispatch(removeSError());
      dispatch(toggleSLoading());
      const result = await fetch(
        `https://api.pokemontcg.io/v1/cards/${pokemonId}`
      );
      const finalResult = await result.json();
      dispatch(setPokemon(finalResult.card));
      dispatch(toggleSLoading());
    } catch (error) {
      dispatch(setSError());
      dispatch(toggleSLoading());
    }
  };
}

export function setPokemon(pokemon) {
  return {
    type: actionTypes.SET_SINGLE_POKEMON,
    payload: {
      pokemon,
    },
  };
}

export function setSError() {
  return {
    type: actionTypes.SET_SINGLE_ERROR,
  };
}

export function removeSError() {
  return {
    type: actionTypes.REMOVE_SINGLE_ERROR,
  };
}

export function toggleSLoading() {
  return {
    type: actionTypes.TOGGLE_SINGLE_LOADING,
  };
}
