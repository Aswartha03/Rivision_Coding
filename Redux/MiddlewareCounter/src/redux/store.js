import {createStore, applyMiddleware} from 'redux';
import counterReducer from './reducer';
import {asyncMiddleware} from './middleware';

import logger from 'redux-logger';
let store = createStore (
  counterReducer,
  applyMiddleware (logger, asyncMiddleware)
);
export default store