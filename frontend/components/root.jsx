import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/"  component={PokemonFormContainer} />
        
        <Route exact path="/"  component={PokemonIndexContainer} />
        <Route exact path="/pokemon/:id" component={PokemonDetailContainer}/>
        <Route exact path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}/>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
