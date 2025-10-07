import {combineReducers} from 'redux';
import counterReducer from './reducers/counterReducer';
import authReducer from './reducers/authReducer';

let rootReducer = combineReducers ({
  counter: counterReducer,
  auth: authReducer,
});
export default rootReducer