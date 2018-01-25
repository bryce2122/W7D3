
const thunk = ({ dispatch }) => next => action => {
  //action === requestAllPokemon, an action creator

    if(typeof action === 'function') { //gets caught here
      //gets called with dispatch, and returns an action
      return action(dispatch);
      //action is never invoked, and the middleware has already returned
    }
    return next(action);

};

export default thunk;
//action
// const action = () => {
//   fetchAllPokemon.then((pokemon)=> {
//     dispatch(receiveAllPokemon(pokemon))
//   })
// }

//action creator
