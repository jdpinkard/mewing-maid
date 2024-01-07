import React from "react";
import "./Square.css";
import feline_toy from "../../../assets/feline_toy.png";
import melon_object from "../../../assets/melon_object.png";

const Square = ({ value, onClick, index, xPlaying }) => {
  
  const playerObject = // determines X and O image
    value === "X" ? (
      <img src={feline_toy} alt="wind-up mouse" width={60} />
    ) : value === "O" ? (
      <img src={melon_object} alt="watermelon" width={60} />
    ) : null;

  return (
    <p className={`square x ${!xPlaying && "o"}`} onClick={onClick} index={index}>
      {playerObject}
    </p>
  );
};

export default Square;
