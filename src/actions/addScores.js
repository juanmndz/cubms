import t from '../constants';
import database from './database';

export function addScore(name, score) {
  return dispatch => {
    dispatch(addScoreRequested());
    const guestsRef = database.ref('/players');
    guestsRef.push({
      name,
      score
    })
    .then(() => {
      dispatch(addScoreFulfilled({ name, score }));
    })
    .catch((error) => {
      dispatch(addScoreRejected());
    });
  }
}


function addScoreRequested() {
  return {
    type: t.ADD_SCORE_REQUESTED
  };
}

function addScoreRejected() {
  return {
    type: t.ADD_SCORE_REJECTED
  }
}

function addScoreFulfilled(player) {
  return {
    type: t.ADD_SCORE_FULFILLED,
    player
  };
}
