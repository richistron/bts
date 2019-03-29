import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage';
import './../main.scss';
import Navigation from './Navigation';

const Layout = () => (
  <div className={'container'}>
    <Router>
      <Navigation />
      <Route exact path='' component={HomePage} />
    </Router>
  </div>
);

export default Layout;