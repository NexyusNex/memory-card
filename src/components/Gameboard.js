import React, { useState } from "react";
import BanzaiBill from "../images/32px-SMW_Banzai_Bill_Sprite.png";

export default function Gameboard() {
  const [cards, setCards] = useState({
    0: {
      name: "Banzai bill",
      src: BanzaiBill,
    },
  });

  return (
    <div className="card-container">
      <div className="card">
        <img src={cards[0].src} alt="banzai bill"></img>
        <h2>{cards[0].name}</h2>
      </div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
}
