import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';

document.body.innerHTML = '<div id="app"></div>';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  rootElement
);
