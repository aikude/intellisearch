import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import searchItems from './reducers';

const store = createStore(searchItems)
//console.log('store -> ', store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 

serviceWorker.unregister();
 