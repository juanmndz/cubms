import t from '../constants';
import database from './database';

export function watchPlayerAddedEvent(dispatch) {
  database.ref('/players').on('child_added', (snap) => {
    dispatch(getScoreAddedAction(snap.val()));
  });
}

function getScoreAddedAction(player) {
  return {
    type: t.SCORE_ADDED,
    player
  };
}
