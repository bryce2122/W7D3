export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchOnePokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
);


export const createOnePokemon = (data) => (
  $.ajax({
    method: 'POST',
    url: `/api/pokemon`,
    data: data
  })
);
