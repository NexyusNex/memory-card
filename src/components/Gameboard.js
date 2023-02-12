import React, { useState } from "react";
import BanzaiBill from "../images/32px-SMW_Banzai_Bill_Sprite.png";
import Wiggler from "../images/32px-SMW_Wiggler_Sprite.png";
import Blurp from "../images/SMW_Blurp_Sprite.png";
import Boo from "../images/SMW_Boo_Sprite.png";
import ClappinChuck from "../images/SMW_Clappin_Chuck_Sprite.png";
import DinoRhino from "../images/SMW_Dino_Rhino_Sprite.png";
import Koopa from "../images/SMW_Koopa.png";
import Magikoopa from "../images/SMW_Magikoopa_Sprite.png";
import MontyMole from "../images/SMW_Monty_Mole_Sprite.png";
import Paratroopa from "../images/SMW_Paratroopa_Sprite.png";
import Pokey from "../images/SMW_Pokey_Sprite.png";
import Rex from "../images/SMW_Rex_Sprite.png";

export default function Gameboard() {
  const [cards, setCards] = useState({
    0: {
      src: BanzaiBill,
      name: "Banzai bill",
    },
    1: {
      src: Wiggler,
      name: "Wiggler",
    },
    2: {
      src: Blurp,
      name: "Blurp",
    },
    3: {
      src: Boo,
      name: "Boo",
    },
    4: {
      src: ClappinChuck,
      name: "Clappin' Chuck",
    },
    5: {
      src: DinoRhino,
      name: "Dino Rhino",
    },
    6: {
      src: Koopa,
      name: "Koopa",
    },
    7: {
      src: Magikoopa,
      name: "Magikoopa",
    },
    8: {
      src: MontyMole,
      name: "Monty Mole",
    },
    9: {
      src: Pokey,
      name: "Pokey",
    },
    10: {
      src: Rex,
      name: "Rex",
    },
    11: {
      src: Paratroopa,
      name: "Paratroopa",
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
