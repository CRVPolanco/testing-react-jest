import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducers from '../reducers';

const store = createStore(reducers, initialState);
const history = createBrowserHistory();

const ProviderMock = (props) => {
  return(
    <Provider store={store}>
      <Router history={history}>
        {props.children}
      </Router>
    </Provider>
  );
};

export default ProviderMock;
