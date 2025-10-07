import {createStore} from 'redux';
import CounterReducer from './reducer';

let store = createStore (CounterReducer);
export {store};
