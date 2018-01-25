import React from 'react';
import PokemonListItem from './pokemon_list_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    let pokemonListItems = this.props.pokemon.map((pokemon) => (
      <PokemonListItem key={pokemon.id} pokemon={pokemon} />
    ));
    console.log(pokemonListItems);

    return (
      <ul>
        {pokemonListItems}
      </ul>
    );
  }
}

export default PokemonIndex;
