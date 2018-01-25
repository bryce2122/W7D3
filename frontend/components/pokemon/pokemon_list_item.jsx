import React from 'react';
import { Link } from 'react-router-dom';

const PokemonListItem = ({ pokemon }) => {
  return (
    <li>
      <Link to={`pokemon/${pokemon.id}`}>
      <h1>
        {pokemon.name}
      </h1>
      <img src={pokemon.image_url}></img>
      </Link>
    </li>
  );
};

export default PokemonListItem;
