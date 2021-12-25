import React from "react";

import "./app.css";

const Card = ({ pet, cls }) => {
  return (
    <div className={`card-container ${cls && "hide"}`}>
      <img src={pet.imageURL} alt={pet.name} />
      <h4>{pet.name}</h4>
    </div>
  );
};

export default Card;
