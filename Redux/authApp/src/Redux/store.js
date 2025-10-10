
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer } from './reducer';
import { thunk } from 'redux-thunk';
let mainReducer = combineReducers({
    auth:authReducer
})

let store = createStore(mainReducer,applyMiddleware(thunk))

export default store