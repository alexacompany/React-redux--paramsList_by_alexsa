import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {createStore} from 'redux';
import './index.css';
import App from './containers/App';
import reducers from './Reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
