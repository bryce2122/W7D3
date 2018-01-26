import {connect} from 'react-redux';
import {requestOnePokemon} from '../../actions/pokemon_actions';
import {selectAllPokemon, selectAllItems} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';



const mapStateToProps = state => ({

  pokemon: selectAllPokemon(state),
  items: selectAllItems(state)
});


const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
