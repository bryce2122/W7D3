import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("mounted", this.props.match.params.id);
    this.props.requestOnePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {

    if (newProps.match.params.id !== this.props.match.params.id) {

      this.props.requestOnePokemon(newProps.match.params.id);
    }
  }

  render() {

    let {items,pokemon} = this.props;

    const imageStyle = {
      width: '100px',
      height: '100px'
    };
    return (
      <div>

        {pokemon.map(pokemon => {
          return(
            <div key={pokemon.id}>
              <h1>Name: {pokemon.name}</h1>
              <h1>Attack: {pokemon.attack}</h1>
              <h1>Defense: {pokemon.defense}</h1>
              {pokemon.moves && <h1>Moves: {pokemon.moves.join(" ")}</h1>}
              <h1>Type: {pokemon.poke_type}</h1>
              <img src={pokemon.image_url}/>
            </div>
          );

        })}



      {items.map(item => {
        return(

          <Link to={`1/items/${item.id}`} key={item.id}>
            <h1>{item.name}</h1>
            <img style={imageStyle} src={item.image_url}/>
          </Link>
        );

      })}



      </div>
    );


  }

}

export default PokemonDetail;
