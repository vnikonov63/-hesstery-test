import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { startPokemon } from "../components/redux/actions";

const pokemonCardStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function PokemonsGeneral() {
  let { id } = useParams();
  const { pokemon, isLoading, isError } = useSelector(
    (state) => state.specificPokemon
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPokemon(id));
  }, []);

  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      {isError ? (
        <h2>An error occured, sorry</h2>
      ) : isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>{pokemon.name}</h1>
          <button
            class="btn"
            onClick={() => {
              dispatch(startPokemon(id));
            }}
          >
            Update
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4>Types: </h4>
            {pokemon.types &&
              pokemon.types.map((type) => {
                return <h4>{type}</h4>;
              })}
          </div>
          <h4>{pokemon.supertype}</h4>
          <h4>{pokemon.subtype}</h4>
          <h4>{pokemon.hp}</h4>
          <div>
            {pokemon.retreatCost &&
              pokemon.retreatCost.map((cost) => {
                return <h4>{cost}</h4>;
              })}
          </div>
          <h4>{pokemon.covertedRetreatCost}</h4>
          <h4>{pokemon.rarity}</h4>
          <h4>{pokemon.series}</h4>
          <h4>{pokemon.set}</h4>
          <h3>Attacks:</h3>
          <AttackDesign attacks={pokemon.attacks} />
          <div style={{ width: "100%", height: "200px" }}></div>
        </div>
      )}
    </div>
  );
}

function AttackDesign({ attacks }) {
  return (
    <div>
      {attacks &&
        attacks.map((attack, index) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid black",
                  borderRadius: "10px",
                  margin: "15px",
                  padding: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <h4>Costs: </h4>
                    {attack.cost.map((cost) => {
                      return <h4>{cost}</h4>;
                    })}
                  </div>
                  <h4>Name: {attack.name}</h4>
                </div>
                <h5>{attack.text}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default PokemonsGeneral;
