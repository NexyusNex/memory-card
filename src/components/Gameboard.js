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
  const cards = [
    {
      src: BanzaiBill,
      name: "Banzai bill",
    },
    {
      src: Wiggler,
      name: "Wiggler",
    },
    {
      src: Blurp,
      name: "Blurp",
    },
    {
      src: Boo,
      name: "Boo",
    },
    {
      src: ClappinChuck,
      name: "Clappin' Chuck",
    },
    {
      src: DinoRhino,
      name: "Dino Rhino",
    },
    {
      src: Koopa,
      name: "Koopa",
    },
    {
      src: Magikoopa,
      name: "Magikoopa",
    },
    {
      src: MontyMole,
      name: "Monty Mole",
    },
    {
      src: Pokey,
      name: "Pokey",
    },
    {
      src: Rex,
      name: "Rex",
    },
    {
      src: Paratroopa,
      name: "Paratroopa",
    },
  ];
  function DisplayCards() {
    const list = cards.map((element) => {
      return (
        <div className="card">
          <img src={element.src} alt={element.name}></img>
          <p>{element.name}</p>
        </div>
      );
    });
    return <div className="card-container">{list}</div>;
  }
  return <DisplayCards cards={cards}></DisplayCards>;
}
