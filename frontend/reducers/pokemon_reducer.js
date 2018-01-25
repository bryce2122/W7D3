import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash/merge';

const pokemonReducer = (state={}, action) => {

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // let newState = merge({}, state, action.pokemon);
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      let newState = {};
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }

};

export default pokemonReducer;
