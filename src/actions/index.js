import t from '../constants';
import database from './database';

export function getScore() {
  return dispatch => {
    dispatch(getScoreRequest());
    return database.ref('/').once('value', snap => {
      const game = snap.val();
      dispatch(getScoreFulfilled(game))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getScoreRejected());
    });
  }
}

function getScoreRequest() {
  return {
    type: t.GET_SCORE_REQUESTED
  };
}

function getScoreRejected() {
  return {
    type: t.GET_SCORE_REJECTED
  }
}

function getScoreFulfilled(game) {
  return {
    type: t.GET_SCORE_FULFILLED,
    game
  };
}
