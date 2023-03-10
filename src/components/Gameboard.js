import React, { useEffect, useState } from "react";
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
  const array = [
    {
      src: BanzaiBill,
      name: "Banzai bill",
      id: 1,
    },
    {
      src: Wiggler,
      name: "Wiggler",
      id: 2,
    },
    {
      src: Blurp,
      name: "Blurp",
      id: 3,
    },
    {
      src: Boo,
      name: "Boo",
      id: 4,
    },
    {
      src: ClappinChuck,
      name: "Clappin' Chuck",
      id: 5,
    },
    {
      src: DinoRhino,
      name: "Dino Rhino",
      id: 6,
    },
    {
      src: Koopa,
      name: "Koopa",
      id: 7,
    },
    {
      src: Magikoopa,
      name: "Magikoopa",
      id: 8,
    },
    {
      src: MontyMole,
      name: "Monty Mole",
      id: 9,
    },
    {
      src: Pokey,
      name: "Pokey",
      id: 10,
    },
    {
      src: Rex,
      name: "Rex",
      id: 11,
    },
    {
      src: Paratroopa,
      name: "Paratroopa",
      id: 12,
    },
  ];
  const [cards, setCards] = useState([]);
  const [mount, setMount] = useState(0);
  const [score, setScore] = useState(0);
  const [max, setMax] = useState(0);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (mount === 0) {
      setCards(array);
      setMount(1);
    }
  });

  function shuffle() {
    const shuffled = array.sort(() => Math.random() - 0.5);
    setCards((cards) => shuffled);
  }

  function clickCard(e) {
    const id = e.currentTarget.id;
    console.log(score);
    if (score === 11) {
      setSelected([]);
    }
    if (!selected.includes(id)) {
      setScore((score) => score + 1);
      setSelected((select) => [...select, id]);
    } else {
      if (max < score) {
        setMax((max) => score);
      }
      setScore(0);
      setSelected([]);
    }
    shuffle();
  }

  return (
    <div className="content">
      <div className="score">
        <p>Score: {score}</p>
        <p>Max score: {max}</p>
      </div>
      <div className="card-container">
        {cards.map((element) => {
          return (
            <div
              className="card"
              onClick={clickCard}
              key={element.id}
              id={element.id}
            >
              <img src={element.src} alt={element.name}></img>
              <p>{element.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
