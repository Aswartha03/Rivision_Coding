import {applyMiddleware, combineReducers, createStore} from 'redux';
import {postsReducer} from './reducer';

import {logger} from 'redux-logger';
import { thunk } from 'redux-thunk';

let rootReducer = combineReducers ({
  postsFetch: postsReducer,
});
let store = createStore (rootReducer, applyMiddleware (thunk,logger));

export default store