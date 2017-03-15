import React from 'react';
import ReactDOM from 'react-dom';
import GamesContainer from './containers/GamesContainer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import './index.css';

const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <GamesContainer />
  </Provider>,
  document.getElementById('root')
);
