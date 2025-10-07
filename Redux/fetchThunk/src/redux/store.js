import {applyMiddleware, combineReducers, createStore} from 'redux';
import fetchReducer from './reducer';
import { thunk } from 'redux-thunk';

let rootReducer = combineReducers ({
  fetch: fetchReducer,
});

let store = createStore (rootReducer, applyMiddleware (thunk));

export default store;
