import {connect} from 'react-redux';
import {createOnePokemon,receivePokemonErrors} from '../../actions/pokemon_actions';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import PokemonForm from './pokemon_form';



const mapDispatchToProps = dispatch => ({
  createOnePokemon: (data) => dispatch(createOnePokemon(data)),

});

const mapStateToProps = (state) => ({
  errors: state.errors


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(PokemonForm);
