import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("mounted", this.props.match.params.id);
    // this.props.requestOnePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    console.log("PROPS");
    console.log(newProps);
    if (newProps.match.params.id !== this.props.match.params.id) {
      console.log("new", newProps);
      this.props.requestOnePokemon(newProps.match.params.id);
    }
  }

  render() {

    let {items,pokemon} = this.props;

    console.log("items",items);
    console.log("pokemon",pokemon);

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
              <h1>Moves: {pokemon.moves.join(" ")}</h1>
              <h1>Type: {pokemon.poke_type}</h1>
              <img src={pokemon.image_url}/>
            </div>
          );

        })}



      {items.map(item => {
        return(
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img style={imageStyle} src={item.image_url}/>
          </div>
        );

      })}



      </div>
    );


  }

}

export default PokemonDetail;
