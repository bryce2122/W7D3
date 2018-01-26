import * as APIUtil from '../util/api_util';
import { HashRouter, Route } from 'react-router-dom';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestOnePokemon = id => (dispatch) => {
  // dispatch(startLoadingSinglePokemon());
  APIUtil.fetchOnePokemon(id)
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)));
};

// export const createOnePokemon = data => (dispatch) => {
//   // dispatch(startLoadingSinglePokemon());
//    APIUtil.createOnePokemon(data)
//     .then(pokemon => {
//       dispatch(receiveOnePokemon(pokemon));
//       return pokemon;
//     },errors => {
//
//
//       console.log(errors);
//       return dispatch(receivePokemonErrors((errors.responseJSON)));
//
//     }
//   );
// };
export const createOnePokemon = data => dispatch => (
  APIUtil.createOnePokemon(data).then(pokemon => {
    dispatch(receiveOnePokemon(pokemon));
    return pokemon;
  }).fail(err => {
    console.log(err);
    dispatch(receivePokemonErrors(err.responseJSON));
  })
);





export const receivePokemonErrors = errors => {
  // console.log(errors);
  return {
    type: RECEIVE_POKEMON_ERRORS,
    errors
  };
};





// case receive_single_pokemon:
  // newState.laoding = false;
