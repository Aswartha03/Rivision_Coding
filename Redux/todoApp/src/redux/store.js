

import { combineReducers } from "redux";
import { createStore } from "redux";
import formReducer from "./reducers/formReducer";
import todoReducer from "./reducers/dataReducer";

let rootReducer = combineReducers({
    form:formReducer,
    todo:todoReducer
})

let store = createStore(rootReducer)
export default store