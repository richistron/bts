import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage';

const Layout = () => (
  <div>
    <Router>
      <div>navigation</div>
      <Route exact path='' component={HomePage} />
    </Router>
  </div>
);

export default Layout;