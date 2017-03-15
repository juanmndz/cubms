import { combineReducers } from 'redux';

import {scoreReducer} from './game';

export default combineReducers({
  game: scoreReducer
});
