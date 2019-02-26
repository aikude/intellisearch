import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import App from './containers/App';
import 'tachyons';
import './index.css';

//console.log('store -> ', store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
); 

serviceWorker.unregister();
 