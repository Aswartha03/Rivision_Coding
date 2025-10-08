import {applyMiddleware, createStore} from 'redux';
import counterReducer from './reducer';
import {logger} from 'redux-logger';

let store = createStore (counterReducer, applyMiddleware (logger));

export default store;
