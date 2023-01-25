import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

import initialState from './initialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
