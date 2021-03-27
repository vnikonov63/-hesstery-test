import React from "react";
import { useParams, Link } from "react-router-dom";

const pokemonCardStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function PokemonsGeneral() {
  let { id } = useParams();
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <div>
        <h2>{id}</h2>
      </div>
    </div>
  );
}

export default PokemonsGeneral;
