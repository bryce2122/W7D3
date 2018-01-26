import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "garfunkel", attack: "1", defense: "1", moves: "weirdmusic", poke_type: "fire", image_url: "/assets/pokemon_berry.svg"};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      moves: this.state.moves.split(" "),
      attack: parseInt(this.state.attack),
      defense: parseInt(this.state.defense),
    });
    this.props.createOnePokemon({pokemon: this.state}).then((new_pokemon) => {
      this.props.history.push(`pokemon/${new_pokemon.id}`);
    });
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }


  render() {
    const TYPES = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];

    return (

      <div>

        {this.props.errors.map((error,idx) => {
          return <li key={idx}>{error}</li>;
          })};
      <form>
        <label>
          Name
          <input type="text" onChange={this.update("name")} value={this.state.name}></input>
        </label>
        <label>
          Attack
          <input type="text" onChange={this.update("attack")} value={this.state.attack}></input>
        </label>
        <label>
          Defense
          <input type="text" onChange={this.update("defense")} value={this.state.defense}></input>
        </label>
        <label>
          Moves
          <input type="text" onChange={this.update("moves")} value={this.state.moves}></input>
        </label>
        <label>
          Image Url
          <input type="text" onChange={this.update("image_url")} value={this.state.image_url}></input>
        </label>
        <select onChange={this.update("poke_type")}>
          {TYPES.map((name, idx) => <option key={idx} value={name}>{name}</option>)}
        </select>
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );


  }




}

export default withRouter(PokemonForm);
