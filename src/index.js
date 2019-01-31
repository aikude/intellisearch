import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import { searchItems, requestItems } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchItems, requestItems});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
//console.log('store -> ', store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 

serviceWorker.unregister();
 