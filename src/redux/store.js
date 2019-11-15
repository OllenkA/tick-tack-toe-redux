import {createStore, applyMiddleware, combineReducers} from "redux";
import mainReducer from "./main-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    main: mainReducer,
    form: formReducer}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;