import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash/merge';

const itemsReducer = (state={}, action) => {

  switch(action.type) {

    case RECEIVE_ONE_POKEMON:
      return Object.values(action.pokemon.items);
    default:
      return state;
  }

};

export default itemsReducer;
