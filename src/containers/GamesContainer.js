import { connect } from 'react-redux';
import { getScore } from '../actions';
import { addScore } from '../actions/addScores';
import App from '../components/App';
import { watchPlayerAddedEvent } from '../actions/playerAddedEvent';


function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  watchPlayerAddedEvent(dispatch);
  return {
    onGetScore: () => dispatch(getScore()),
    onAddScore: (name, score) => dispatch(addScore(name, score))
  };
}

const gamesContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default gamesContainer;
