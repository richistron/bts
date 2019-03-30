import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layouts/Layout';

document.body.innerHTML = '<div id="app"></div>';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Layout />,
  rootElement
);
