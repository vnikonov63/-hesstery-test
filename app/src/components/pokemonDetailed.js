import React from "react";

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

function pokemonDetailed({ name, image }) {
  return (
    <div style={styles}>
      <h4>{name}</h4>
      <img
        alt={`${name} iamge pokemon`}
        style={{ width: "190px", height: "265px" }}
        src={image}
      />
    </div>
  );
}

export default pokemonDetailed;
