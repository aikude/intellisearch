import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { searchItems, requestItems, alerts } from './reducers';

const rootReducer = combineReducers({searchItems, requestItems, alerts});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;