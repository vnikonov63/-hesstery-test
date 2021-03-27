import React from "react";

import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "30px",
  border: "2px solid black",
  borderRadius: "9px",
  padding: "10px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

function pokemonDetailed({ name, image, id }) {
  return (
    <Link to={`/${id}`}>
      <div style={styles}>
        <h4>{name}</h4>
        <img
          alt={`${name} iamge pokemon`}
          style={{ width: "190px", height: "265px" }}
          src={image}
        />
      </div>
    </Link>
  );
}

export default pokemonDetailed;
