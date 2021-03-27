import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { startAllPokemons } from "../components/redux/actions";

import PokemonDetailed from "./pokemonDetailed";

const manyPokemonsStyles = {
  display: "flex",
  flexWrap: "wrap",
  margin: "40px",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid black",
  width: "60%",
};

const overallStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const paginationAreaStyles = {
  display: "flex",
  justifyContent: "center",
};
function MainPage() {
  const dispatch = useDispatch();
  const { pokemons, isError, isLoading } = useSelector(
    (state) => state.mainPage
  );
  const [paginationCount, setPaginationCount] = useState(0);
  useEffect(() => {
    dispatch(startAllPokemons());
  }, []);
  return (
    <>
      {isError ? (
        <h2>An error occured, sorry</h2>
      ) : isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div style={overallStyles}>
          <button
            style={{
              margin: "25px",
            }}
            className="btn"
            onClick={() => {
              dispatch(startAllPokemons());
            }}
          >
            Refresh
          </button>
          <div style={paginationAreaStyles}>
            <button
              onClick={() => {
                setPaginationCount((prev) => {
                  return prev >= 1 ? prev - 1 : prev;
                });
              }}
              className="btn"
            >
              prev
            </button>
            <div style={manyPokemonsStyles}>
              {pokemons
                .filter((pokemon, index) => {
                  return index % 10 === paginationCount;
                })
                .map(({ name, image, id }) => {
                  return <PokemonDetailed name={name} image={image} id={id} />;
                })}
            </div>
            <button
              onClick={() => {
                setPaginationCount((prev) => {
                  return prev < pokemons.length / 10 ? prev + 1 : prev;
                });
              }}
              className="btn"
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
