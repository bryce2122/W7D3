export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectAllItems = (state) => {
  return Object.values(state.entities.items);
};

export const selectOneItem = (state, id) => {
  console.log(state);
  return [state.entities.items[id]];
};
