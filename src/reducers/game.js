import t from '../constants';

export function scoreReducer(state = {}, action) {
  switch(action.type) {
    case t.GET_SCORE_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case t.GET_SCORE_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting invite.',
      });
    }
    case t.GET_SCORE_FULFILLED: {
      const { players } = action.game;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got invite.'
      });
      newState.players = [];
      if (players) {
        newState.players = Object.keys(players).map(k => players[k]);
      }
      return newState;
    }

    case t.ADD_SCORE_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case t.ADD_SCORE_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding guest.',
      });
    }
    case t.ADD_SCORE_FULFILLED: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added guest.'
      });
      return newState;
    }
    case t.SCORE_ADDED: {
      const newState = Object.assign({}, state);
      newState.players = newState.players || [];
      newState.players = newState.players.slice();
      newState.players.push(action.player);
      return newState;
    }

    default:
    return state;
  }
}
