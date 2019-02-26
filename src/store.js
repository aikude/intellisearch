import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { searchItems, requestItems } from './reducers';

const rootReducer = combineReducers({searchItems, requestItems});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;