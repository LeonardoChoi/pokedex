import React from "react";

import "./Pokecard.css";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

function Pokecard(props) {
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-title">{props.name}</h2>
      <img src={imgSrc} />
      <div className="Pokecard-data">Type:{props.type}</div>
      <div className="Pokecard-data">EXP:{props.exp}</div>
    </div>
  );
}

export default Pokecard;
