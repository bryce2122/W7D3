import React from 'react';
import { Link } from 'react-router-dom';

const PokemonListItem = (props) => {
  return (
    <li >
      <Link to={`pokemon/${props.pokemon.id}`}>
      <h1>
        {props.pokemon.name}
      </h1>
      <img src={props.pokemon.image_url}></img>
      </Link>
    </li>
  );
};

export default PokemonListItem;
