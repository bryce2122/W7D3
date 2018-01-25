import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/"  component={PokemonIndexContainer} />
        <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
