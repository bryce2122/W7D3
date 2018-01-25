import {connect} from 'react-redux';
import {requestOnePokemon} from '../../actions/pokemon_actions';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';



const mapStateToProps = state => ({

  pokemon: selectAllPokemon(state),
  items: Object.values(state.entities.items)
});


const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
